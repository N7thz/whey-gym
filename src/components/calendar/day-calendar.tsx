import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { isSameDay as useIsSameDay } from "date-fns"

type DayCalendarProps = ComponentProps<"div"> & {
    day: Date
    name: string
    isSameDay: boolean
}

export const DayCalendar = ({
    day, name, isSameDay, className, ...props
}: DayCalendarProps) => {

    const isToDay = useIsSameDay(day, new Date())

    return (
        <div
            className={cn(
                "w-full h-32 border p-1 rounded-md ",
                isSameDay && "relative border-primary",
                isToDay && "border-violet-500",
                className
            )}
            {...props}
        >
            <span className={
                cn(
                    isToDay && "text-violet-500",
                    isSameDay ? "absolute top-1 left-2" : "pt-2 pl-2"
                )
            }>
                {day.getDate()}
            </span>
            <div className="space-y-4">
                {
                    isSameDay && (
                        <Card className="py-2.5 mt-7 mx-1.5 rounded-sm">
                            <CardHeader className="px-4">
                                <CardTitle className="truncate">
                                    {name}
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}
