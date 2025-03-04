import { prisma } from "@/lib/prisma"
import type { Prisma, User } from "@prisma/client"

type UserUpdateInput = Prisma.UserUpdateInput & {
    id: string
}

type InactivateInput = {
    id: string
    isActive: boolean
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

    async function findByMany(): Promise<User[]> {
        return await user.findMany()
    }

    return {
        create,
        update,
        inactivate,
        findById,
        findByEmail,
        findByMany
    }
}
