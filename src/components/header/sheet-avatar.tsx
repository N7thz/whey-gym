"use client"

import { Button } from "@/components/ui/button"
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar } from "../avatar"
import { FormUploadImage } from "../forms/form-upload-image"
import { useHeader } from "./use-header"
import { useRouter } from "next/navigation"

export const SheetAvatar = () => {
	
	const { refresh } = useRouter()
	const { user, isLoading, isOpen, setIsOpen, signOut } = useHeader()

	if (!user || isLoading) return <Avatar src={null} />

	const { id, email, imageUrl } = user

	return (
		<Sheet
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<SheetTrigger>
				<Avatar
					src={imageUrl}
					alt="icon-image"
				/>
			</SheetTrigger>
			<SheetContent className="flex flex-col justify-between">
				<div className="space-y-12">
					<SheetHeader>
						<SheetTitle>Opções</SheetTitle>
						<SheetDescription>
							Bem vindo
							<span className="mx-1">
								{email}
							</span>
						</SheetDescription>
					</SheetHeader>
					<FormUploadImage
						id={id}
						oldImage={imageUrl}
						setIsOpen={setIsOpen}
					/>
				</div>
				<SheetFooter className="w-full">
					<Button className="w-full" onClick={() => signOut(refresh)}>
						Sair
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
