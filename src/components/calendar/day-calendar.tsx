import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

type DayCalendarProps = ComponentProps<"div"> & {
    day: Date
    name: string
    isSameDate: boolean
}

export const DayCalendar = ({
    day, name, isSameDate, className, ...props
}: DayCalendarProps) => {
    return (
        <div
            className={cn(
                "w-full h-32 border p-1 rounded-md ",
                isSameDate && "relative border-primary",
                className
            )}
            {...props}
        >
            <span className={
                cn(isSameDate ? "absolute top-1 left-2" : "pt-2 pl-2")
            }>
                {day.getDate()}
            </span>
            <div className="space-y-4">
                {
                    isSameDate && (
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
