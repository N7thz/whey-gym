"use client"

import type { GetResponse, Training } from "@/@types"
import { api } from "@/http/api"
import { useQuery } from "@tanstack/react-query"
import { Card } from "../ui/card"

export const MainList = () => {

	const { data, isLoading } = useQuery({
		queryKey: ["find-many-trainigs-by-user-id"],
		queryFn: async () => {

			const { data } = await api.get<GetResponse<Training>>("/trainings")

			return data
		},
	})

	if (!data || isLoading) return <p>Carregando...</p>

	const { count, data: trainigs } = data

	console.log(trainigs)

	return (
		<div className="space-y-3">
			{count}
			<div>
				{
					trainigs.map(({ id, name }) => (
						<Card key={id}>
							{id}
						</Card>
					))
				}
			</div>
		</div>
	)
}
