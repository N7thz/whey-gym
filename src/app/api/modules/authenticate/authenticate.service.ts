import type { Error, Payload } from "@/@types"
import type { Prisma } from "@prisma/client"
import { HttpStatus } from "@/@types/http-status"
import { UserService } from "@modules/user/user.service"
import { compare } from "bcryptjs"
import { decodeToken } from "@/functions/decode-token"
import jwt from "jsonwebtoken"

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

        const SECRET_JWT = process.env.SECRET_JWT

        const payload = {
            sub: {
                id: user.id,
                role: user.role
            }
        }

        const token = jwt.sign(payload, SECRET_JWT, {
            algorithm: "HS256",
            expiresIn: "24h"
        })

        return { acess_token: token }
    }

    async function authenticate(authorization: string | null) {

        const {
            error: tokenError,
            payload
        } = decodeToken(authorization)

        if (tokenError) return { tokenError }

        const id = payload.sub.id

        const { error, userResponse } = await userService.findById(id)

        if (error) return { error }

        return { userResponse }
    }

    return {
        login,
        authenticate
    }
}
