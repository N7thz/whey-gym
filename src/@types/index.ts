import type { UUID } from "node:crypto"
import type { HttpStatus } from "./http-status"
import type { Role } from "@prisma/client"

export type Error = {
    message: string
    statusCode: HttpStatus
}

export type UserResponse = {
    id: string
    email: string
    imageUrl: string | null
    role: Role
}

export type Payload = {
    sub: {
        id: UUID
        role: Role
    }
    iat: number
    exp: number
}
