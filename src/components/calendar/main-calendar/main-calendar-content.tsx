import type { MainProps } from "@/components/main/main-layout"
import { CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { NoDay } from "../no-day"
import { DayCalendar } from "../day-calendar"
import { useCalendar } from "../use-calendar"
import { isSameDay } from "date-fns"

export const MainCalendarContent = ({ data, isLoading }: MainProps) => {

	const { days } = useCalendar()

	if (!data || isLoading) return <p>Carregando dados...</p>

	const { data: trainings } = data

	return (
		<ScrollArea
			type="hover"
			className="w-full h-100 overflow-hidden"
		>
			<ScrollBar />
			<CardContent className="size-full grid grid-cols-7 gap-2 py-3 pl-0">
				{
					days.map((day, index) =>
						day
							? trainings.map(({ id, madeAt, name }) => {

								const isSameDate = isSameDay(madeAt, day)

								return (
									<DayCalendar
										key={id}
										day={day}
										name={name}
										isSameDate={isSameDate}
									/>
								)
							})
							: <NoDay key={index} />
					)}
			</CardContent>
		</ScrollArea>
	)
}
