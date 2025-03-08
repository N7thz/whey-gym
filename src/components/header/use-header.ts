import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/http/api"
import { useState } from "react"
import type { UserResponse } from "@/@types"

export function useHeader() {

	const [isOpen, setIsOpen] = useState(false)

	const { refresh } = useRouter()

	const { data: user, isLoading } = useQuery({
		queryKey: ["find-user"],
		queryFn: async () => {

			const { data } = await api.get<UserResponse>("/authenticate")

			return data
		},
		refetchOnWindowFocus: false
	})

	function signOut() {
		deleteCookie("token")
		refresh()
	}

	return { user, isLoading, isOpen, setIsOpen, signOut }
}
