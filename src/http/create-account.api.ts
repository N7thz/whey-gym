import { api } from "./api"
import type { CreateAccountProps } from "@/schemas/create-account-schema"

type CreateAccountRequest = Omit<CreateAccountProps, "confirm_password">

export function CreateAccount({ email, password }: CreateAccountRequest) {
    return api.post("/create-account", { email, password })
}