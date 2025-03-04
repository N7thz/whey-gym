import type { SigninProps as SigninRequest } from "@/schemas/sign-in-schema"
import type { CreateAccountProps } from "@/schemas/create-account-schema"
import type { UpdateUserProps } from "@/schemas/update-user-schema"
import { getCookie } from "cookies-next"
import { User } from "@/@types"
import { UUID } from "@/@types"
import axios from "axios"

const token = getCookie("token")

export const api = axios.create({
	baseURL: "http://localhost:3333/api",
	headers: {
		Authorization: `Bearer ${token}`,
	},
})

type SigninResponse = { acess_token: string }

type CreateAccountRequest = Omit<CreateAccountProps, "confirm_password">

type UpdateUserRequest = UpdateUserProps & {
	id: UUID
}

export const useHttp = () => {

	function Signin({ email, password }: SigninRequest) {
		return api.post<SigninResponse>("/authenticate", { email, password })
	}

	function CreateAccount({ email, name, password }: CreateAccountRequest) {
		return api.post("/create-account", { email, name, password })
	}

	function UpdateUser({ email, name, id }: UpdateUserRequest) {
		return api.put<User>(`/users/${id}`, { email, name })
	}

	function Inactivate(id: UUID) {
		return api.put<User>(`/inactivate/${id}`)
	}

	return {
		Signin,
		CreateAccount,
		UpdateUser,
		Inactivate
	}
}
