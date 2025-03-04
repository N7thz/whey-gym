import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { CreateAccountProps } from "@/schemas/create-account-schema"
import type { SigninProps } from "@/schemas/sign-in-schema"
import { cn } from "@/lib/utils"

export const LabelEmail = () => {

	const {
		register,
		formState: { errors },
	} = useFormContext<CreateAccountProps | SigninProps>()

	return (
		<Label
			htmlFor="email"
			className="flex flex-col gap-3"
		>
			Email:
			<Input
				id="email"
				placeholder={errors.email && errors.email.message}
				className={cn(
					errors.email && [
						"ring-1 ring-destructive",
						"focus-visible:ring-destructive",
						"placeholder:text-destructive placeholder:italic",
					]
				)}
				{...register("email")}
			/>
		</Label>
	)
}
