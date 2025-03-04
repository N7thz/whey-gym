import type { SigninProps as SigninRequest } from "@/schemas/sign-in-schema"
import type { CreateAccountProps } from "@/schemas/create-account-schema"
import { getCookie } from "cookies-next"
import type { User } from "@prisma/client"
import type { UUID } from "node:crypto"
import axios from "axios"

const token = getCookie("token")

export const api = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		Authorization: `Bearer ${token}`,
	},
})

type SigninResponse = { acess_token: string }

type CreateAccountRequest = Omit<CreateAccountProps, "confirm_password">

type UpdateUserRequest = any & {
	id: UUID
}

export const useHttp = () => {
	function Signin({ email, password }: SigninRequest) {
		return api.post<SigninResponse>("/authenticate", { email, password })
	}

	function CreateAccount({ email, password }: CreateAccountRequest) {
		return api.post("/create-account", { email, name, password })
	}

	function UpdateUser({ email, id }: UpdateUserRequest) {
		return api.put<User>(`/users/${id}`, { email, name })
	}

	function Inactivate(id: UUID) {
		return api.put<User>(`/inactivate/${id}`)
	}

	return {
		Signin,
		CreateAccount,
		UpdateUser,
		Inactivate,
	}
}
