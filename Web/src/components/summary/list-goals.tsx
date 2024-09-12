import type { ComponentProps } from "react";
import { CircleCheck } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface ListRootProps extends ComponentProps<"div"> {}

const ListRoot = (props: ListRootProps) => {
	return <div className="flex flex-col gap-4" {...props} />;
};

interface ListHeaderProps extends ComponentProps<"div"> {
	date: string;
}

const ListHeader = ({ date, ...props }: ListHeaderProps) => {
	const relativeDate = dayjs(date).fromNow();
	const formattedDate = dayjs(date).format("DD [de] MMMM");

	return (
		<h3 className="font-medium" {...props}>
			<span className="capitalize">{relativeDate}</span>{" "}
			<span className="text-xs text-zinc-400">({formattedDate})</span>
		</h3>
	);
};

interface ListContentProps extends ComponentProps<"ul"> {}

const ListContent = (props: ListContentProps) => {
	return <ul className="flex flex-col gap-3" {...props} />;
};

interface ListItemProps {
	title: string;
	createdAt: string;
}

const ListItem = ({ title, createdAt }: ListItemProps) => {
	const time = dayjs(createdAt).format("HH:mm");

	return (
		<li className="flex items-center gap-2">
			<CircleCheck className="size-4 text-pink-500" />
			<p className="text-sm text-zinc-400">
				Você completou “<span className="text-zinc-100">{title}</span>” às{" "}
				<span className="text-zinc-100">{time}h</span>
			</p>
			<button
				type="button"
				className="text-xs text-zinc-500 underline cursor-pointer"
			>
				Desfazer
			</button>
		</li>
	);
};

export { ListRoot, ListHeader, ListContent, ListItem };
