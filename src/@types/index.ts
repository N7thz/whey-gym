import type { LucideIcon } from "lucide-react"
import type { HttpStatus } from "./http-status"
import type { Role, User } from "@prisma/client"

export type UUID = `${string}-${string}-${string}-${string}-${string}`

export type Error = {
    message: string
    statusCode: HttpStatus
}

export type UserResponse = Pick<User, "id" | "email" | "imageUrl" | "role">

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

export type GetResponse<T> = {
    data: T[];
    count: number;
}

export type Training = ({
    exercises: {
        id: string;
        name: string;
        series: number;
        reps: number;
        trainingId: string | null;
    }[];
} & {
    id: string;
    name: string;
    madeIn: Date;
    obs: string | null;
    userId: string;
})