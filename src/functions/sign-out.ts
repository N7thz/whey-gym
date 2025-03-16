import { deleteCookie } from "cookies-next/client"

export function signOut(refresh: () => void) {

    deleteCookie("token")
    refresh()
}