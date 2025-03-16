import { Card } from "@/components/ui/card"

export const DaysOfWeek = () => {

    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

    return (
        <Card className="contents divide-x-2">
            {
                daysOfWeek.map((day, index) => (
                    <div
                        key={index}
                        className="size-fit w-full text-center font-semibold"
                    >
                        {day}
                    </div>
                ))
            }
        </Card>
    )
}
