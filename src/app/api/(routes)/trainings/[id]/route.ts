import type { ContextProps } from "@/@types"
import { TrainingService } from "@modules/training/training.service"
import { NextResponse } from "next/server"

const trainingService = TrainingService()

export async function GET(_: Request, { params: { id } }: ContextProps) {

    const { error, training } = await trainingService.findById(id)

    if (error) return NextResponse.json(error, { status: error.statusCode })

    return NextResponse.json(training)
}
