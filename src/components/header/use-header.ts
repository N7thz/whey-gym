import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { api, useHttp } from "@/http/api"
import { useState } from "react"
import type { UserResponse } from "@/@types"

export function useHeader() {

	const [isOpen, setIsOpen] = useState(false)

	const { refresh } = useRouter()
	const http = useHttp()

	const { data: user, isLoading } = useQuery({
		queryKey: ["find-user"],
		queryFn: http.FindUser,
		refetchOnWindowFocus: false
	})

	function signOut() {
		deleteCookie("token")
		refresh()
	}

	return { user, isLoading, isOpen, setIsOpen, signOut }
}
