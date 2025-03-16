import { api } from "./api"
import type { UserResponse } from "@/@types"

export function remove(id: string) {
    return api.delete<UserResponse>(`/users/${id}`)
}
