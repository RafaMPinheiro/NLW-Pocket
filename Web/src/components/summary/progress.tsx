import { Progress, ProgressIndicator } from "../ui/progress-bar";

interface SummaryProgressProps {
	completed: number;
	total: number;
}

export const SummaryProgress = ({ completed, total }: SummaryProgressProps) => {
	const widthPercentage = ((completed / total) * 100).toFixed(0);

	return (
		<div className="w-full flex flex-col gap-3">
			<Progress value={completed} max={total}>
				<ProgressIndicator style={{ width: `${widthPercentage}%` }} />
			</Progress>
			<div className="w-full flex items-center justify-between gap-3 text-zinc-400">
				<span className="flex">
					Você completou
					<span className="text-zinc-100 mx-1">{completed}</span>
					de
					<span className="text-zinc-100 mx-1">{total}</span>
					metas nessa semana.
				</span>
				<span className="">{`${widthPercentage}%`}</span>
			</div>
		</div>
	);
};
