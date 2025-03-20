import type { MainProps } from "@/components/main/main-layout"
import { Card } from "@/components/ui/card"
import { MainCalendarHeader } from "./main-calendar-header"
import { MainCalendarContent } from "./main-calendar-content"
import { useCalendar } from "../use-calendar"

export const MainCalendar = ({ data, isLoading }: MainProps) => {

	const { dateInString, days, nextMonth, prevMonth } = useCalendar()

	return (
		<Card className="w-full h-11/12 px-6">
			<MainCalendarHeader
				dateInString={dateInString}
				prevMonth={prevMonth}
				nextMonth={nextMonth}
			/>
			<MainCalendarContent
				days={days}
				data={data}
				isLoading={isLoading}
			/>
		</Card>
	)
}
