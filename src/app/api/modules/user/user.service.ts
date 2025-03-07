import type { Prisma } from "@prisma/client"
import { type UpdateImage, UserRespository } from "./user.repository"
import { hash } from "bcryptjs"
import type { Error } from "@/@types"
import { HttpStatus } from "@/@types/http-status"
import { setUserResponse } from "@/functions/user-reponse"

export function UserService() {
    const userRespository = UserRespository()

    async function create({
        email,
        password: passwordText,
    }: Prisma.UserCreateInput) {
        const { user: userExist } = await findByEmail(email)

        if (userExist) {
            const error: Error = {
                message:
                    "Parece que já existe uma conta associada a este endereço de e-mail.",
                statusCode: HttpStatus.CONFLICT,
            }

            return { error }
        }

        const password = await hash(passwordText, 6)

        const user = await userRespository.create({
            email,
            password,
        })

        const userResponse = setUserResponse(user)

        return { userResponse }
    }

    async function updateImage({ id, imageUrl }: UpdateImage) {
        const { error } = await validateId(id)

        if (error) return { error }

        const userUpdated = await userRespository.updateImage({ id, imageUrl })

        const userResponse = setUserResponse(userUpdated)

        return { userResponse }
    }

    async function findById(id: string) {
        const { error, user } = await validateId(id)

        if (error) return { error }

        const userResponse = setUserResponse(user)

        return { userResponse }
    }

    async function findByEmail(email: string) {
        const user = await userRespository.findByEmail(email)

        if (!user) {
            const error: Error = {
                message: "Não foi possivel encontrar o usuário desejado.",
                statusCode: HttpStatus.BAD_REQUEST,
            }

            return { error }
        }

        return { user }
    }

    async function findMany() {
        const { count, users } = await userRespository.findByMany()

        const usersResponse = users.map(user => setUserResponse(user))

        return {
            usersResponse,
            count,
        }
    }

    async function validateId(id: string) {
        const user = await userRespository.findById(id)

        if (!user) {
            const error: Error = {
                message: "Não foi possivel encontrar o usuário desejado.",
                statusCode: HttpStatus.BAD_REQUEST,
            }

            return { error }
        }

        return { user }
    }

    return {
        create,
        findById,
        findByEmail,
        findMany,
        updateImage,
    }
}
