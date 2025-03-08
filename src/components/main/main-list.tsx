import { Card } from "@/components/ui/card"

export const MainList = () => {
	return (
		<div className="space-y-3">
			{
				Array.from({ length: 7 }).map((_, index) => (
					<Card key={index} className="px-2">
						Lorem ipsum dolor sit amet. {index}
					</Card>
				))
			}
		</div>
	)
}
