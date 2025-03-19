import { Card } from "../ui/card"

export const DaysOfWeek = () => {

    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

    return (
        <Card className="divide-x-2 w-full grid grid-cols-7 gap-2 mx-auto border-none pb-0 pr-1">
            {
                daysOfWeek.map((day, index) => (
                    <div
                        key={index}
                        className="w-full text-center font-semibold"
                    >
                        {day}
                    </div>
                ))
            }
        </Card>
    )
}
