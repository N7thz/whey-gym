import { FormCreateAccount } from "@/components/forms/form-create-account"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardHeader,
	CardTitle,
	CardFooter,
	CardDescription,
} from "@/components/ui/card"
import { Toaster } from "@/components/ui/sonner"

export default function CreateAccount() {
	return (
		<div className="flex-1 flex items-center justify-center">
			<Card className="w-1/3">
				<CardHeader>
					<CardTitle>Criar Usuário</CardTitle>
					<CardDescription>Crie um novo usuário</CardDescription>
				</CardHeader>
				<FormCreateAccount />
				<CardFooter className="justify-end">
					<Button form="create-account">Confirmar</Button>
				</CardFooter>
			</Card>
			<Toaster />
		</div>
	)
}
