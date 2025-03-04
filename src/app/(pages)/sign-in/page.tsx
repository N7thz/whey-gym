import { CardShine } from "@/components/border-shine"
import { FormSignin } from "@/components/forms/form-sign-in"
import { Button } from "@/components/ui/button"
import {
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card"
import { Toaster } from "@/components/ui/sonner"

export default function Signin() {
	return (
		<div className="h-dvh flex items-center justify-center flex-1">
			<CardShine className="w-1/3">
				<CardHeader>
					<CardTitle className="text-3xl">Login</CardTitle>
					<CardDescription>Logue em sua conta</CardDescription>
				</CardHeader>
				<FormSignin />
				<CardFooter className="justify-end">
					<Button form="form-sign-in" className="w-1/2">
						Confirmar
					</Button>
				</CardFooter>
			</CardShine>
			<Toaster />
		</div>
	)
}
