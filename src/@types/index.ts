import type { LucideIcon } from "lucide-react"
import type { HttpStatus } from "./http-status"
import type { Role, User, Exercise, Training } from "@prisma/client"

export type ContextProps = {
    params: {
        id: string
    }
}

export type Error = {
    message: string
    statusCode: HttpStatus
}

export type UserResponse = Pick<User, "id" | "email" | "imageUrl" | "role">

export type Payload = {
    sub: {
        id: string
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

export type GetResponse<T> = {
    data: T[]
    count: number
}

export type TrainingWithExercise = Training & {
    exercises: Exercise[]
}