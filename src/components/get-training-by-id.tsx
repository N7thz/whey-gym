"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { TrainingWithExercise } from "@/@types"
import { FormEditTraining } from "./forms/form-edit-training"

export const GetTrainingById = ({ id }: { id: string }) => {

    const { data: training, isLoading } = useQuery<TrainingWithExercise>({
        queryKey: ["find-training-by-id", id],
        queryFn: async () => {

            const { data } = await axios.get(`/api/trainings/${id}`)

            return data
        },
    })

    if (!training || isLoading) return <p>Carregando...</p>

    return (
        <FormEditTraining training={training} />
    )
}
