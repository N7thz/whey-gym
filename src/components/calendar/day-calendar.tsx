export const DayCalendar = ({ day }: { day: Date }) => {
    return (
        <div className="size-full border p-1 rounded-md" >
            {day.getDate()}
        </div>
    )
}
