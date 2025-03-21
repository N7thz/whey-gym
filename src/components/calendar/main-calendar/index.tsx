import type { MainProps } from "@/components/main/main-layout"
import { Card} from "@/components/ui/card"
import { MainCalendarHeader } from "./main-calendar-header"
import { MainCalendarContent } from "./main-calendar-content"

export const MainCalendar = ({ data, isLoading }: MainProps) => {

	return (
		<Card className="w-full h-11/12 px-6">
			<MainCalendarHeader />
			<MainCalendarContent
				data={data}
				isLoading={isLoading}
			/>
		</Card>
	)
}
