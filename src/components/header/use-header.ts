import { useState } from "react"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useCurrentUser } from "@/providers/user-provider"

export function useHeader() {

	const [isOpen, setIsOpen] = useState(false)

	const { refresh } = useRouter()
	const { data: user, isLoading } = useCurrentUser()

	function signOut() {
		deleteCookie("token")
		refresh()
	}

	return { user, isLoading, isOpen, setIsOpen, signOut }
}
