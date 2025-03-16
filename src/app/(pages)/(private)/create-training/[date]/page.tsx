import { dateInString } from "@/utils/date-in-string"

type DateProps = {
    params: {
        date: string
    }
}

export default function DateEE({ params: { date } }: DateProps) {

    const dateE = new Date(decodeURIComponent(date))

    return (
        <div>
            {dateInString(dateE)}
        </div>
    )
}