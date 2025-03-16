"use client"

import { useState } from "react"
import type { MainProps } from "./main-layout"
import {
	Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarArrowDown, CalendarArrowUp } from "lucide-react"

export const MainCalendar = ({ data, isLoading }: MainProps) => {

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

	const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"] as const

	const days = generateDaysOfMonth()

	const dateInString = currentMonth.toLocaleString(
		"pt-BR", {
		month: "long",
		year: "numeric"
	})

	return (
		<Card className="h-11/12 p-4 ">
			<CardHeader>
				<CardTitle className="text-2xl font-bold text-center mb-4">
					{dateInString}
				</CardTitle>
				<CardDescription className="text-foreground flex justify-between mb-4">
					<Button
						variant={"outline"}
						onClick={prevMonth}
					>
						<CalendarArrowDown />
						Mês Anterior
					</Button>
					<Button
						variant={"outline"}
						onClick={nextMonth}
					>
						Próximo Mês
						<CalendarArrowUp />
					</Button>
				</CardDescription>
			</CardHeader>
			<CardContent className="size-full grid grid-cols-7 gap-2 py-3">
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
				{
					days.map((day, index) =>
						day ? (
							<div
								key={index}
								className="size-full border p-1 rounded-md"
							>
								{day.getDate()}
							</div>
						) : (
							<div
								key={index}
								className="size-full bg-muted/30 rounded-md"
							/>
						)
					)}
			</CardContent>
		</Card>
	)
}
