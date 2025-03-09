import { api } from "./api"
import type { SigninProps as SigninRequest } from "@/schemas/sign-in-schema"

type SigninResponse = { acess_token: string }

export function Signin({ email, password }: SigninRequest) {
    return api.post<SigninResponse>("/authenticate", { email, password })
}