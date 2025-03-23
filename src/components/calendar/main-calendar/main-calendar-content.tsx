import type { MainProps } from "@/components/template/main/main-layout"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { MainCalendarContentLoading } from "./main-calendar-content-loading"
import { DialogCalendar } from "../dialog-calendar"

type MainCalendarContentProps = MainProps & {
	days: (Date | null)[]
}

export const MainCalendarContent = ({
	data, isLoading, days
}: MainCalendarContentProps) => {

	if (!data || isLoading) return <MainCalendarContentLoading />

	const { data: trainings } = data

	return (
		<ScrollArea
			type="hover"
			className="w-full h-100 overflow-hidden"
		>
			<ScrollBar />
			<DialogCalendar
				days={days}
				trainings={trainings}
			/>
		</ScrollArea>
	)
}
