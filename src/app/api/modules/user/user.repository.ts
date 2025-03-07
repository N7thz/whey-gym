import { prisma } from "@/lib/prisma"
import type { Prisma, User } from "@prisma/client"

type UserUpdateInput = Prisma.UserUpdateInput & {
    id: string
}

type InactivateInput = {
    id: string
    isActive: boolean
}

export type UpdateImage = {
    id: string
    imageUrl: string
}

export function UserRespository() {

    const user = prisma.user

    async function create(userInput: Prisma.UserCreateInput): Promise<User> {
        return await user.create({
            data: userInput
        })
    }

    async function update({ id, ...userInput }: UserUpdateInput): Promise<User> {
        return await user.update({
            where: {
                id: id
            },
            data: userInput
        })
    }

    async function updateImage({ id, imageUrl }: UpdateImage): Promise<User> {
        return await user.update({
            where: {
                id: id
            },
            data: {
                imageUrl
            }
        })
    }

    async function inactivate({ id, isActive }: InactivateInput): Promise<User> {
        return await user.update({
            where: {
                id: id
            },
            data: {
                isActive: !isActive
            }
        })
    }

    async function findById(id: string): Promise<User | null> {
        return await user.findUnique({
            where: {
                id
            }
        })
    }

    async function findByEmail(email: string): Promise<User | null> {
        return await user.findUnique({
            where: {
                email
            }
        })
    }

    async function findByMany(): Promise<{ users: User[], count: number }> {

        const users = await user.findMany()
        const count = await user.count()

        return {
            users,
            count
        }
    }

    return {
        create,
        update,
        updateImage,
        inactivate,
        findById,
        findByEmail,
        findByMany
    }
}
