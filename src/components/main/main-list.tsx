import { Card } from "@/components/ui/card"
import type { MainProps } from "./main-layout"
import { MainListLoading } from "./main-list-loading"

export const MainList = ({ data, isLoading }: MainProps) => {

	if (!data || isLoading) return <MainListLoading />

	const { count, data: trainigs } = data

	console.log(trainigs)

	return (
		<div className="space-y-3">
			{count}
			<div>
				{trainigs.map(({ id, name }) => (
					<Card key={id}>{id}</Card>
				))}
			</div>
		</div>
	)
}
