import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";

import { Button } from "../ui/button";
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { RadioItem } from "./radioItem";

import { createGoal } from "../../http/create-goal";

const createGoalForm = z.object({
	title: z.string().min(1, "O título não pode ser vazio"),
	desiredWeeklyFrequency: z.coerce.number().int().min(1).max(7),
});

type CreateGoalForm = z.infer<typeof createGoalForm>;

export const CreateGoal = () => {
	const queryClient = useQueryClient();
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<CreateGoalForm>({
		resolver: zodResolver(createGoalForm),
		defaultValues: {
			title: "",
			desiredWeeklyFrequency: 1,
		},
	});

	const handleCreateGoal = async ({
		title,
		desiredWeeklyFrequency,
	}: CreateGoalForm) => {
		await createGoal({ title, desiredWeeklyFrequency });

		queryClient.invalidateQueries({ queryKey: ["summary"] });
		queryClient.invalidateQueries({ queryKey: ["pending-goals"] });

		reset();
	};

	return (
		<DialogContent className="grid grid-rows-dialog">
			<form
				id="form"
				onSubmit={handleSubmit(handleCreateGoal)}
				className="flex flex-col gap-6"
			>
				<div className="flex flex-col gap-3">
					<div className="flex justify-between">
						<DialogTitle>
							<h1 className="text-lg font-semibold text-zinc-50">
								Cadastrar meta
							</h1>
						</DialogTitle>
						<DialogClose>
							<X className="size-5 text-zinc-600" />
						</DialogClose>
					</div>
					<DialogDescription>
						Adicione atividades que{" "}
						<span className="underline">te fazem bem</span> e que você quer
						continuar praticando toda semana.
					</DialogDescription>
				</div>
				<div className="flex flex-col gap-3">
					<Label htmlFor="title">Qual a atividade?</Label>
					<Input
						id="title"
						autoFocus
						placeholder="Praticar exercícios, meditar, etc..."
						{...register("title")}
					/>
					{errors.title && (
						<p className="text-red-400 text-sm">{errors.title.message}</p>
					)}
				</div>
				<div className="flex flex-col gap-3">
					<Label htmlFor="desiredWeeklyFrequency">
						Quantas vezes na semana?
					</Label>
					<Controller
						control={control}
						name="desiredWeeklyFrequency"
						render={({ field }) => (
							<RadioGroup
								onValueChange={field.onChange}
								value={String(field.value)}
								defaultValue="1"
							>
								<RadioItem value="1" text="1x na semana" emoji="🥱" />
								<RadioItem value="2" text="2x na semana" emoji="🙂" />
								<RadioItem value="3" text="3x na semana" emoji="😎" />
								<RadioItem value="4" text="4x na semana" emoji="😜" />
								<RadioItem value="5" text="5x na semana" emoji="🤨" />
								<RadioItem value="6" text="6x na semana" emoji="🤯" />
								<RadioItem value="7" text="Todos dias da semana" emoji="🔥" />
							</RadioGroup>
						)}
					/>
				</div>
			</form>
			<div className="flex gap-3">
				<DialogClose asChild>
					<Button className="flex-1" variant="secondary">
						Fechar
					</Button>
				</DialogClose>
				<Button type="submit" form="form" className="flex-1">
					Salvar
				</Button>
			</div>
		</DialogContent>
	);
};
