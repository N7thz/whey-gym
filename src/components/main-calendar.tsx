"use client"

import { useState } from "react"
import { DialogCalendar } from "@/components/dialog-calendar"
import { Calendar } from "@/components/ui/calendar"
import { ptBR } from "date-fns/locale"

export const MainCalendar = () => {

	const [isOpen, setIsOpen] = useState(false)
	const [date, setDate] = useState<Date>(new Date())

	return (
		<>
			<DialogCalendar
				date={date}
				open={isOpen}
				onOpenChange={setIsOpen}
			/>
			<Calendar
				locale={ptBR}
				className="size-full border border-border rounded-lg"
				classNames={{
					caption_label: "capitalize font-semibold mb-2 text-xl",
					month: "size-full",
					head_cell: "w-full capitalize",
					cell: "h-32 w-full border border-border rounded-lg mx-1 cursor-pointer hover:scale-95 duration-300 p-1.5",
				}}
				onDayClick={(date) => {
					setIsOpen((oldValue) => !oldValue)
					setDate(date)
				}}
			/>
		</>
	)
}
