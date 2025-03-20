import { CardContent } from "@/components/ui/card"
import { NoDay } from "../no-day"
import { isSameDay as useIsSameDay } from "date-fns"
import { Dialog } from "@/components/ui/dialog"
import {
    DialogCalendarTrigger
} from "../dialog-calendar/dialog-calendar-trigger"
import {
    DialogCalendarContent
} from "../dialog-calendar/dialog-calendar-content"
import type { TrainingWithExercise } from "@/@types"

type DialogCalendarProps = {
    days: (Date | null)[]
    trainings: TrainingWithExercise[]
}

export const DialogCalendar = ({ days, trainings }: DialogCalendarProps) => {
    return (
        <Dialog>
            <CardContent className="size-full grid grid-cols-7 gap-2 py-3 pl-0">
                {days.map((day, index) =>
                    day ? (
                        trainings.map(training => {

                            const { id, madeAt, name } = training

                            const isSameDay = useIsSameDay(madeAt, day)

                            return (
                                <div key={id}>
                                    <DialogCalendarTrigger
                                        day={day}
                                        name={name}
                                        isSameDay={isSameDay}
                                    />
                                    <DialogCalendarContent
                                        training={training}
                                    />
                                </div>
                            )
                        })
                    ) : (
                        <NoDay key={index} />
                    )
                )}
            </CardContent>
        </Dialog>
    )
}
