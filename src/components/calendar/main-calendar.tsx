import type { MainProps } from "../main/main-layout"
import {
	Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarArrowDown, CalendarArrowUp } from "lucide-react"
import { NoDay } from "./no-day"
import { DayCalendar } from "./day-calendar"
import { DaysOfWeek } from "./days-of-week"
import { useCalendar } from "./use-calendar"

export const MainCalendar = ({ data, isLoading }: MainProps) => {

	const { dateInString, days, prevMonth, nextMonth, } = useCalendar()
	
	return (
		<Card className="h-11/12 p-4 ">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-center mb-4">
					{dateInString}
				</CardTitle>
				<CardDescription className="text-foreground flex justify-between mb-4">
					<Button
						variant={"outline"}
						onClick={prevMonth}
					>
						<CalendarArrowDown />
						Mês Anterior
					</Button>
					<Button
						variant={"outline"}
						onClick={nextMonth}
					>
						Próximo Mês
						<CalendarArrowUp />
					</Button>
				</CardDescription>
			</CardHeader>
			<CardContent className="size-full grid grid-cols-7 gap-2 py-3">
				<DaysOfWeek />
				{
					days.map((day, index) =>
						day
							? <DayCalendar
								key={index}
								day={day}
							/>
							: <NoDay key={index} />
					)}
			</CardContent>
		</Card>
	)
}
