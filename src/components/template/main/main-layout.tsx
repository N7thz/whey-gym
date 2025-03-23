"use client"

import { MainCalendar } from "@/components/calendar/main-calendar"
import { MainList } from "@/components/template/main/main-list"
import { useHttp } from "@/http/api"
import { useQuery } from "@tanstack/react-query"
import type { GetResponse, TrainingWithExercise } from "@/@types"

export type MainProps = {
    data: GetResponse<TrainingWithExercise> | undefined
    isLoading: boolean
}

export const MainLayout = ({ view }: { view: "calendar" | "list" }) => {

    const http = useHttp()

    const { data, isLoading } = useQuery({
        queryKey: ["find-many-trainings-by-user-id"],
        queryFn: http.FindManyTrainigsByUserId,
    })

    if (view === "calendar") return (
        <MainCalendar
            data={data}
            isLoading={isLoading}
        />
    )

    return (
        <MainList
            data={data}
            isLoading={isLoading}
        />
    )
}