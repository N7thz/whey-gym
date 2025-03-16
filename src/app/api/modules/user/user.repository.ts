import { prisma } from "@/lib/prisma"
import type { Prisma, User } from "@prisma/client"

type UserUpdateInput = Prisma.UserUpdateInput & {
    id: string
}

type removeInput = {
    id: string
    isActive: boolean
}

export type UpdateImage = {
    id: string
    imageUrl: string
}

export function UserRespository() {

    const user = prisma.user

    async function create(userInput: Prisma.UserCreateInput) {
        return await user.create({
            data: userInput
        })
    }

    async function update({ id, ...userInput }: UserUpdateInput) {
        return await user.update({
            where: {
                id
            },
            data: userInput
        })
    }

    async function updateImage({ id, imageUrl }: UpdateImage) {
        return await user.update({
            where: {
                id
            },
            data: {
                imageUrl
            }
        })
    }

    async function remove(id: string) {
        return await user.delete({
            where: {
                id
            }
        })
    }

    async function findById(id: string) {
        return await user.findUnique({
            where: {
                id
            }
        })
    }

    async function findByEmail(email: string) {
        return await user.findUnique({
            where: {
                email
            }
        })
    }

    async function findByMany() {

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
        remove,
        findById,
        findByEmail,
        findByMany
    }
}
