import { useQuery } from "@tanstack/react-query";

import { EmpytGoal } from "./components/empty-goal";
import { Summary } from "./components/summary";

import { CreateGoal } from "./components/modal/create-goal";
import { Dialog } from "./components/ui/dialog";

import { getSummary } from "./http/get-summary";

export function App() {
	const { data } = useQuery({
		queryKey: ["summary"],
		queryFn: getSummary,
		staleTime: 1000 * 60,
	});

	return (
		<Dialog>
			{data && data.total > 0 ? <Summary /> : <EmpytGoal />}

			<CreateGoal />
		</Dialog>
	);
}
