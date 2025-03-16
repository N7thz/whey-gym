import { useState } from "react"
import { useCurrentUser } from "@/providers/user-provider"
import { signOut } from "@/functions/sign-out"

export function useHeader() {

	const [isOpen, setIsOpen] = useState(false)

	const { data: user, isLoading } = useCurrentUser()

	return { user, isLoading, isOpen, setIsOpen, signOut }
}
