import { api } from "./api"
import type { UserResponse, UUID } from "@/@types"

export function Inactivate(id: UUID) {
    return api.put<UserResponse>(`/inactivate/${id}`)
}
