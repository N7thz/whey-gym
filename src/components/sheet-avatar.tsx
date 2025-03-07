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
import { Avatar } from "./avatar"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/http/api"
import type { UserResponse } from "@/@types"
import { FormUploadImage } from "./forms/form-upload-image"
import { useState } from "react"

export const SheetAvatar = () => {

	const [isOpen, setIsOpen] = useState(false)

	const { refresh } = useRouter()

	const { data: user, isLoading } = useQuery({
		queryKey: ["find-user"],
		queryFn: async () => {
			const { data } = await api.get<UserResponse>("/authenticate")

			return data
		},
	})

	if (!user || isLoading) return <p>Carregando...</p>

	console.log(user)

	const { id, email, imageUrl } = user

	function signOut() {
		deleteCookie("token")
		refresh()
	}

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
					<Button className="w-full" onClick={signOut}>
						Sair
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
