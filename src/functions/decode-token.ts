import type { Error, Payload } from "@/@types"
import { HttpStatus } from "@/@types/http-status"
import jwt from "jsonwebtoken"

export function decodeToken(authorization: string | null) {

    if (!authorization || authorization === "") {
        const error: Error = {
            message: "Não foi possive autenticar o usuário",
            statusCode: HttpStatus.UNAUTHORIZED,
        }

        return { error }
    }

    const token = authorization.slice(7)

    const SECRET_JWT = process.env.SECRET_JWT

    const payload = jwt.verify(token, SECRET_JWT) as unknown as Payload

    return { payload }
}