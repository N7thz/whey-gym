"use client"

import { CardContent } from "@/components/ui/card"
import { Form } from "@/components/forms/form-primitive"
import { ErrorSpan } from "@/components/error-span"
import { useFormCreateAccount } from "./use-form-create-account"
import { LabelPassword } from "../label-password"
import { LabelEmail } from "../label-email"

export const FormCreateAccount = () => {

	const {
		methods,
		errors,
		passwordsAreTheSame,
		handleSubmit,
		onSubmit
	} = useFormCreateAccount()

	return (
		<CardContent>
			<Form
				id="create-account"
				methods={methods}
				className="space-y-5"
				onSubmit={handleSubmit(onSubmit)}
			>
				<LabelEmail />
				<LabelPassword value="password" text="Senha" />
				<LabelPassword
					value="confirm_password"
					text="Confirmar Senha"
				/>
				{errors.confirm_password &&
					errors.confirm_password.type === "custom" &&
					!passwordsAreTheSame && (
						<ErrorSpan
							message={errors.confirm_password.message}
							className="text-base"
							size={16}
						/>
					)}
			</Form>
		</CardContent>
	)
}
