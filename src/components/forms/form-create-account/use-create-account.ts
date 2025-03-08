import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useHttp } from "@/http/api"
import { useRouter } from "next/navigation"
import {
	type CreateAccountProps,
	CreateAccountSchema,
} from "@/schemas/create-account-schema"
import { toast } from "@/components/toast"

export function useCreateAccount() {

	const http = useHttp()
	const { push } = useRouter()

	const methods = useForm<CreateAccountProps>({
		resolver: zodResolver(CreateAccountSchema),
	})

	const {
		handleSubmit,
		watch,
		formState: { errors, ...props },
	} = methods

	const password = watch("password")
	const confirm_password = watch("confirm_password")

	const passwordsAreTheSame = (
		password !== "" &&
		confirm_password !== "" &&
		password === confirm_password
	)

	function onSubmit({ email, password }: CreateAccountProps) {
		http
			.CreateAccount({ email, password })
			.then(() => {
				toast({
					title: "O usuário foi criado com sucesso.",
					variant: "sucess",
				})

				setTimeout(() => push("/users"), 2000)
			})
			.catch(err => {
				console.log(err)

				toast({
					title: "Erro ao criar usuário.",
					variant: "error",
				})
			})
	}

	return {
		methods,
		errors,
		passwordsAreTheSame,
		handleSubmit,
		onSubmit,
	}
}
