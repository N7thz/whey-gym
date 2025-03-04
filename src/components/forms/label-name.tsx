import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import type { CreateAccountProps } from "@/schemas/create-account-schema"

export const LabelName = () => {

	const {
		register,
		formState: { errors },
	} = useFormContext<CreateAccountProps>()

	return (
		<Label htmlFor="name" className="flex flex-col gap-3">
			Nome do Usuário:
			<Input
				id="name"
				placeholder={errors.name && errors.name.message}
				className={cn(
					errors.name && [
						"ring-1 ring-destructive",
						"focus-visible:ring-destructive",
						"placeholder:text-destructive placeholder:italic",
					]
				)}
				{...register("name")}
			/>
		</Label>
	)
}
