import { useForm } from "react-hook-form"
import { type SigninProps, signinSchema } from "@/schemas/sign-in-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useHttp } from "@/http/api"
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { toast } from "@/components/toast"

export function useFormSignIn() {
	
	const http = useHttp()

	const { refresh } = useRouter()

	const methods = useForm<SigninProps>({
		resolver: zodResolver(signinSchema),
	})

	const { handleSubmit } = methods

	const oneDayInSeconds = 24 * 60 * 60

	function onSubmit({ email, password }: SigninProps) {

		setCookie("token", "testedosguri")
		refresh()

		// http
		// 	.Signin({ email, password })
		// 	.then(({ data: { acess_token } }) => {

		// 		setCookie("token", acess_token, { maxAge: oneDayInSeconds })

		// 		refresh()
		// 	})
		// 	.catch((err) => {

		// 		console.log(err)

		// 		toast({
		// 			title: "Email ou senha incorretos.",
		// 			variant: "error"
		// 		})
		// 	})
	}

	return { methods, handleSubmit, onSubmit }
}
