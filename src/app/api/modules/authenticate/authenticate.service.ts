import type { Error } from "@/@types"
import { HttpStatus } from "@/@types/http-status"
import { UserService } from "@modules/user/user.service"
import { compare } from "bcryptjs"
import type { Prisma } from "@prisma/client"
import { setUserResponse } from "@/functions/user-reponse"

export function AuthenticateService() {
    const userService = UserService()

    async function login({ email, password }: Prisma.UserCreateInput) {

        const { error: emailError, user } = await userService.findByEmail(email)

        if (emailError) {
            const error: Error = {
                message: "Email ou senha inválidos",
                statusCode: HttpStatus.BAD_REQUEST,
            }

            return { error }
        }

        const passwordIsCorrect = await compare(password, user.password)

        if (!passwordIsCorrect) {
            const error: Error = {
                message: "Email ou senha inválidos",
                statusCode: HttpStatus.BAD_REQUEST,
            }

            return { error }
        }

        const userResponse = setUserResponse(user)

        return { userResponse }
    }

    return {
        login,
    }
}
