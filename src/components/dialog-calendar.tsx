import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { dateInString } from "@/utils/date-in-string"

type DialogCalendarProps = {
	date: Date
	open: boolean
	onOpenChange: (open: boolean) => void
}

export const DialogCalendar = ({
	date,
	open,
	onOpenChange,
}: DialogCalendarProps) => {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogTitle>
					{dateInString(date)}
				</DialogTitle>
			</DialogContent>
		</Dialog>
	)
}
