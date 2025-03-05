import type { SigninProps as SigninRequest } from "@/schemas/sign-in-schema"
import type { CreateAccountProps } from "@/schemas/create-account-schema"
import { getCookie } from "cookies-next"
import type { User } from "@prisma/client"
import type { UserResponse, UUID } from "@/@types"
import axios from "axios"
import type { UploadImageProps } from "@/schemas/upload-image-schema"

const token = getCookie("token")

export const api = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		Authorization: `Bearer ${token}`,
	},
})

type SigninResponse = { acess_token: string }

type UploadImageRequest = UploadImageProps & {
	id: string
}

type CreateAccountRequest = Omit<CreateAccountProps, "confirm_password">

type UpdateUserRequest = any & {
	id: UUID
}

export const useHttp = () => {
	function Signin({ email, password }: SigninRequest) {
		return api.post<SigninResponse>("/authenticate", { email, password })
	}

	function CreateAccount({ email, password }: CreateAccountRequest) {
		return api.post("/create-account", { email, password })
	}

	function UpdateUser({ email, id }: UpdateUserRequest) {
		return api.put<UserResponse>(`/users/${id}`, { email })
	}

	function UploadImage({ id, imageUrl }: UploadImageRequest) {
		return api.put<UserResponse>(`/upload-image/${id}`, { imageUrl })
	}

	function Inactivate(id: UUID) {
		return api.put<UserResponse>(`/inactivate/${id}`)
	}

	return {
		Signin,
		CreateAccount,
		UpdateUser,
		Inactivate,
		UploadImage,
	}
}
