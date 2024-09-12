import { useQuery } from "@tanstack/react-query";

import { Separator } from "./ui/separator";

import { SummaryProgress } from "./summary/progress";
import { SummaryHeader } from "./summary/header";
import { SummaryButtonGoal } from "./summary/button-goal";
import * as List from "./summary/list-goals";

import { getSummary } from "../http/get-summary";

export const Summary = () => {
	const { data: summaryData } = useQuery({
		queryKey: ["summary"],
		queryFn: getSummary,
		staleTime: 1000 * 60,
	});

	if (!summaryData) return null;

	return (
		<div className="min-h-screen flex justify-center py-10">
			<div className="w-summary flex flex-col items-center gap-6">
				<SummaryHeader />
				<SummaryProgress
					completed={summaryData.completed}
					total={summaryData.total}
				/>
				<Separator className="w-full" />
				<SummaryButtonGoal />
				<div className="w-full flex flex-col gap-6">
					<h1 className="text-xl font-medium text-zinc-100">Sua semana</h1>

					{summaryData.total === 0 ? (
						<span className="text-sm text-zinc-400">
							Você ainda não completou nenhuma meta essa semana.
						</span>
					) : (
						<>
							{Object.entries(summaryData.goalsPerDay).map(([date, goals]) => (
								<List.ListRoot key={date}>
									<List.ListHeader date={date} />
									<List.ListContent>
										{goals.map((goal) => (
											<List.ListItem
												key={goal.id}
												title={goal.title}
												createdAt={goal.createdAt}
											/>
										))}
									</List.ListContent>
								</List.ListRoot>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
};
