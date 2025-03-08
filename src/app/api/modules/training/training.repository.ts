import { prisma } from "@/lib/prisma"
import type { Prisma } from "@prisma/client"

export type CreateInput = Prisma.TrainingCreateInput & {
    createManyExerciseInput: Prisma.ExerciseCreateManyInput[]
}

export type UpdateInput = {
    id: string
    data: Prisma.TrainingUpdateInput
}

export function TrainingRepository() {
    const training = prisma.training

    async function create({ createManyExerciseInput, ...data }: CreateInput) {
        return await training.create({
            data: {
                ...data,
                exercises: {
                    createMany: {
                        data: createManyExerciseInput
                    }
                }
            },
            include: {
                exercises: true,
            },
        })
    }

    async function update({ id, data, }: UpdateInput) {
        return await training.update({
            where: {
                id,
            },
            data
        })
    }

    async function remove(id: string) {
        await training.delete({
            where: {
                id
            },
        })
    }

    async function findById(id: string) {
        return await training.findUnique({
            where: {
                id
            },
        })
    }

    async function findByName(name: string) {
        return await training.findFirst({
            where: {
                name
            },
        })
    }

    async function findManyByUserId(userId: string) {

        const trainings = await training.findMany({
            where: {
                userId
            },
            include: {
                exercises: true,
            },
        })

        const count = await training.count({
            where: {
                userId
            },
        })

        return { trainings, count }
    }

    return {
        create,
        update,
        remove,
        findById,
        findByName,
        findManyByUserId
    }
}
