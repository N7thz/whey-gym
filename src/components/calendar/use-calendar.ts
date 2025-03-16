import { useState } from "react"

export function useCalendar() {

    const [currentMonth, setcurrentMonth] = useState(new Date())
    
    function nextMonth() {
        setcurrentMonth(new Date(
            currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1
        ))
    }

    const prevMonth = () => {
        setcurrentMonth(new Date(
            currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1
        ))
    }

    function generateDaysOfMonth() {

        const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)

        const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)

        const days = []

        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(null)
        }

        for (let day = 1; day <= lastDay.getDate(); day++) {
            days.push(new Date(
                currentMonth.getFullYear(), currentMonth.getMonth(), day
            ))
        }

        while (days.length % 7 !== 0) {
            days.push(null)
        }

        return days
    }

    const days = generateDaysOfMonth()

    const dateInString = currentMonth.toLocaleString(
        "pt-BR", {
        month: "long",
        year: "numeric"
    })

    return { dateInString, days, prevMonth, nextMonth, }
}