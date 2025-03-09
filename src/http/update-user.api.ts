import type { UserResponse, UUID } from "@/@types"
import { api } from "./api"

type UpdateUserRequest = Partial<UserResponse> & {
    id: UUID
}

export function UpdateUser({ email, id }: UpdateUserRequest) {
    return api.put<UserResponse>(`/users/${id}`, { email })
}
