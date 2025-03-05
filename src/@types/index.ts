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