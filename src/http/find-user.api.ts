import { api } from "./api"
import type { UserResponse } from "@/@types"

export async function FindUser() {

    const { data } = await api.get<UserResponse>("/authenticate")

    return data
}
