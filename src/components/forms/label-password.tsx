import { useState } from "react"
import { useFormContext } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import type { CreateAccountProps } from "@/schemas/create-account-schema"

type LabelPasswordProps = {
	value: "password" | "confirm_password"
	text: string
}

export const LabelPassword = ({ value, text }: LabelPasswordProps) => {
	const [isVisible, setIsVisible] = useState(false)

	const Icon = isVisible ? EyeOff : Eye

	const {
		register,
		formState: { errors },
	} = useFormContext<CreateAccountProps>()

	return (
		<Label htmlFor={value} className="flex flex-col gap-3 relative">
			{text}
			<Input
				id={value}
				type={isVisible ? "text" : "password"}
				placeholder={errors[value] && errors[value].message}
				className={cn(
					errors[value] &&
					errors.confirm_password?.type !== "custon" && [
						"ring-1 ring-destructive",
						"focus-visible:ring-destructive",
						"placeholder:text-destructive placeholder:italic",
					]
				)}
				{...register(value)}
			/>
			<Icon
				className="size-4 absolute bottom-2.5 right-2.5"
				onClick={() => setIsVisible(oldValue => !oldValue)}
			/>
		</Label>
	)
}
