import { Button } from "@/components/ui/button"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet"
import { Avatar } from "./avatar"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"

export const SheetAvatar = () => {

	const { refresh } = useRouter()

	function signOut() {
		deleteCookie("token")
		refresh()
	}

	return (
		<Sheet>
			<SheetTrigger>
				<Avatar
					src={null}
					alt="icon-image"
				/>
			</SheetTrigger>
			<SheetContent className="flex flex-col justify-between">
				<div className="space-y-12">
					<SheetHeader>
						<SheetTitle>Opções</SheetTitle>
						<SheetDescription>
							Bem vindo nome
						</SheetDescription>
					</SheetHeader>
				</div>
				<SheetFooter className="w-full">
					<Button
						className="w-full"
						onClick={signOut}
					>
						Sair
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
