import { NextResponse, type NextRequest } from "next/server"
import { TrainingService } from "@modules/training/training.service"
import type { CreateTrainingProps } from "@/schemas/create-training-schema"
import { decodeToken } from "@/functions/decode-token"

const trainingService = TrainingService()

export async function GET(request: NextRequest) {

    const authorization = request.headers.get("authorization")

    const { error, payload } = decodeToken(authorization)

    if (error)
        return NextResponse.json(error, {
            status: error.statusCode
        })

    const id = payload.sub.id 

    const { trainings, count } = await trainingService.findManyByUserId(id)

    return NextResponse.json({
        data: trainings,
        count
    })
}

export async function POST(request: NextRequest) {

    const authorization = request.headers.get("authorization")

    const { name, obs, exercises } = await request.json() as CreateTrainingProps

    const { error, payload } = decodeToken(authorization)

    if (error)
        return NextResponse.json(error, {
            status: error.statusCode
        })

    const id = payload.sub.id    

    const response = await trainingService.create({
        name,
        obs,
        user: {
            connect: {
                id
            }
        },
        createManyExerciseInput: exercises
    })

    return NextResponse.json(response)
}
