import type { Prisma, User } from "@prisma/client"
import { UserRespository } from "./user.repository"
import { hash } from "bcryptjs"
import { Error, HttpStatus } from "@/@types"
import { ErrorProps } from "next/error"
import { userAgentFromString } from "next/server"
export function UserService() {

    const userRespository = UserRespository()

    async function create({
        email,
        password: passwordText
    }: Prisma.UserCreateInput) {

        const userExist = await findByEmail(email)

        if (userExist) {

            const error: Error = {
                message: "Error ao criar usuário",
                statusCode: HttpStatus.CONFLICT
            }

            return { error }
        }

        const password = await hash(passwordText, 6)

        const user = await userRespository.create({
            email,
            password
        })

        return { user }
    }

    async function findByEmail(email: string) {
        return await userRespository.findByEmail(email)
    }

    return {
        create,
        findByEmail
    }
}
