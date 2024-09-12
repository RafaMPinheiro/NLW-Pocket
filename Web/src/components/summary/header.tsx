import { Plus } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { LogoIn } from "../images/logo-in";
import { Button } from "../ui/button";
import { DialogTrigger } from "../ui/dialog";

dayjs.locale("pt-br");

export const SummaryHeader = () => {
	const firstDayOfWeek = dayjs().startOf("week").format("D MMM");
	const lastDayOfWeek = dayjs().endOf("week").format("D MMM");

	return (
		<div className="w-full flex items-center gap-3">
			<LogoIn className="size-6" />
			<span className="flex-1 text-lg font-semibold capitalize text-zinc-50">
				{firstDayOfWeek} - {lastDayOfWeek}
			</span>
			<DialogTrigger asChild>
				<Button type="button" size="sm">
					<Plus className="size-4" />
					<span className="text-sm font-medium leading-none">
						Cadastrar meta
					</span>
				</Button>
			</DialogTrigger>
		</div>
	);
};
