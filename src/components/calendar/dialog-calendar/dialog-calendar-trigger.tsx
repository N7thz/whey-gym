import { DialogTrigger } from "../../ui/dialog"
import { DayCalendar } from "../day-calendar"

type DialogCalendarTriggerProps = {
  day: Date
  name: string
  isSameDay: boolean
}

export const DialogCalendarTrigger = ({
  day, name, isSameDay
}: DialogCalendarTriggerProps) => {
  return (
    <DialogTrigger asChild>
      <DayCalendar
        day={day}
        name={name}
        isSameDay={isSameDay}
      />
    </DialogTrigger>
  )
}
