"use client"

import { CardContent } from "@/components/ui/card"
import { Form } from "@/components/forms/form-primitive"
import { LabelPassword } from "../label-password"
import { useSignIn } from "./use-sign-in"
import { LabelEmail } from "../label-email"

export const FormSignin = () => {
	const { methods, handleSubmit, onSubmit } = useSignIn()

	return (
		<CardContent>
			<Form
				id="form-sign-in"
				methods={methods}
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-5"
			>
				<LabelEmail />
				<LabelPassword
					text="Senha"
					value="password"
				/>
			</Form>
		</CardContent>
	)
}
