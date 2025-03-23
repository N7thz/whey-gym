import type { Error } from "@/@types"
import {
    type CreateInput,
    type UpdateInput,
    TrainingRepository,
} from "./training.repository"
import { HttpStatus } from "@/@types/http-status"

export function TrainingService() {

    const trainingRepository = TrainingRepository()

    async function create(data: CreateInput) {

        const { name } = data

        const training = await trainingRepository.findSameNameAndDay(name)

        if (training) {

            const error: Error = {
                message: "Esse treino já foi adicionado a esse dia.",
                statusCode: HttpStatus.CONFLICT
            }

            return { error }
        }

        const newTraining = await trainingRepository.create(data)

        return { newTraining }
    }

    async function update({ id, data }: UpdateInput) {

        const { error } = await validateId(id)

        if (error) return { error }

        return await trainingRepository.update({ id, data })
    }

    async function remove(id: string) {

        const { error } = await validateId(id)

        if (error) return { error }

        await trainingRepository.remove(id)
    }

    async function findById(id: string) {

        const { error, training } = await validateId(id)

        if (error) return { error }

        return { training }
    }

    async function findByName(name: string) {

        const training = await trainingRepository.findByName(name)

        if (!training) {

            const error: Error = {
                message: "Já existe um treino com esse nome",
                statusCode: HttpStatus.BAD_REQUEST,
            }

            return { error }
        }

        return { training }
    }

    async function findManyByUserId(userId: string) {
        return await trainingRepository.findManyByUserId(userId)
    }

    async function validateId(id: string) {

        const training = await trainingRepository.findById(id)

        if (!training) {
            const error: Error = {
                message: "Não foi possivel encontrar o treino desejado.",
                statusCode: HttpStatus.BAD_REQUEST,
            }

            return { error }
        }

        return { training }
    }

    return {
        create,
        update,
        remove,
        findById,
        findByName,
        findManyByUserId,
    }
}
