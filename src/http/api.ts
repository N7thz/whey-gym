
import axios from "axios"
import { getCookie } from "cookies-next"
import { CreateAccount } from "./create-account.api"
import { Inactivate } from "./inactivate.api"
import { Signin } from "./sign-in.api"
import { UpdateUser } from "./update-user.api"
import { UploadImage } from "./upload-image.api"
import { FindUser } from "./find-user.api"
import { FindManyTrainigsByUserId } from "./find-many-trainigs-by-user-id.api"

const token = getCookie("token")

export const api = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		Authorization: `Bearer ${token}`,
	},
})

export const useHttp = () => {
	return {
		Signin,
		CreateAccount,
		UpdateUser,
		Inactivate,
		UploadImage,
		FindUser,
		FindManyTrainigsByUserId
	}
}