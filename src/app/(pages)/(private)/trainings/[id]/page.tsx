import type { ContextProps as TrainingsProps } from "@/@types"
import { GetTrainingById } from "@/components/get-training-by-id"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Whey Gym | Editar treino",
}

export default function Trainings({ params: { id } }: TrainingsProps) {
    return (
        <div className="w-full flex items-center justify-center">
            <GetTrainingById id={id}/>
        </div>
    )
}
