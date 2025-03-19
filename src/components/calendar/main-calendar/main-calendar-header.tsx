import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarArrowDown, CalendarArrowUp } from "lucide-react"
import { useCalendar } from "../use-calendar"
import { DaysOfWeek } from "../days-of-week"

export const MainCalendarHeader = () => {

	const { dateInString, prevMonth, nextMonth, } = useCalendar()

	return (
		<>
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-center mb-4">
					{dateInString}
				</CardTitle>
				<CardDescription className="text-foreground flex justify-between mb-4">
					<Button
						variant={"outline"}
						onClick={prevMonth}
						className="w-1/3"
					>
						<CalendarArrowDown />
						Mês Anterior
					</Button>
					<Button
						variant={"outline"}
						onClick={nextMonth}
						className="w-1/3"
					>
						Próximo Mês
						<CalendarArrowUp />
					</Button>
				</CardDescription>
			</CardHeader>
			<DaysOfWeek />
		</>
	)
}
