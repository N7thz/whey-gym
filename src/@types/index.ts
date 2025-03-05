import type { LucideIcon } from "lucide-react"
import type { HttpStatus } from "./http-status"
import type { Role } from "@prisma/client"

export type UUID = `${string}-${string}-${string}-${string}-${string}`

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

export type Item = {
    title: string
    url: string
    Icon: LucideIcon
}
