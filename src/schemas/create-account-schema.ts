import { z } from "zod"

export const CreateAccountSchema = z.object({
	email: z
		.string()
		.email({
			message: "E-mail inválido",
		})
		.max(255, {
			message: "Nome de usuário muito longo",
		}),
	password: z
		.string()
		.min(6, {
			message: "A senha deve ter no mínimo 6 caracteres",
		})
		.max(255, {
			message: "Senha muito longa",
		}),
	confirm_password: z
		.string()
		.min(6, {
			message: "A senha deve ter no mínimo 6 caracteres",
		})
		.max(255, {
			message: "Senha muito longa",
		}),
})
	.refine((data) => data.password === data.confirm_password, {
		message: "As senhas devem ser iguais",
		path: ["confirm_password"],
	})

export type CreateAccountProps = z.infer<typeof CreateAccountSchema>
