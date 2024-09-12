import { Plus } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { OutlineButton } from "../ui/outline-button";

import { getPendingGoals } from "../../http/get-pending-goals";
import { createGoalCompletion } from "../../http/create-goal-completion.ts";

export const SummaryButtonGoal = () => {
	const queryClient = useQueryClient();

	const { data: pendingGoals } = useQuery({
		queryKey: ["pending-goals"],
		queryFn: getPendingGoals,
		staleTime: 1000 * 60,
	});

	console.log(pendingGoals);

	if (!pendingGoals) return null;

	const handleCompleteGoal = async (goalId: string) => {
		await createGoalCompletion(goalId);

		queryClient.invalidateQueries({ queryKey: ["summary"] });
		queryClient.invalidateQueries({ queryKey: ["pending-goals"] });
	};

	return (
		<div className="w-full flex items-center flex-wrap gap-3">
			{pendingGoals.map((goal) => (
				<OutlineButton
					key={goal.id}
					value={goal.id}
					onClick={() => handleCompleteGoal(goal.id)}
					disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
				>
					<Plus className="size-4" />
					<span>{goal.title}</span>
				</OutlineButton>
			))}
		</div>
	);
};
