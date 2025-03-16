import type { GetResponse, TrainingWithExercise } from "@/@types"
import {
	Dialog, DialogContent, DialogFooter, DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { dateInString } from "@/utils/date-in-string"
import { NoTrainingsToDay } from "./no-trainings-to-day"
import { TrainingsByDateItem } from "./trainings-by-date-item"

type DialogCalendarProps = {
	trainings: GetResponse<TrainingWithExercise>
	date: Date
	open: boolean
	onOpenChange: (open: boolean) => void
}

type FilterTrainingsByDateProps = {
	trainings: TrainingWithExercise[]
	date: Date
}

export const DialogCalendar = ({
	trainings: { data: trainings },
	date,
	open,
	onOpenChange,
}: DialogCalendarProps) => {


	function filterTrainingsByDate({
		trainings, date
	}: FilterTrainingsByDateProps) {

		return trainings.filter(({ madeAt }) => {

			const madeAtDate = new Date(madeAt)

			return (
				madeAtDate.getDate() === date.getDate() &&
				madeAtDate.getMonth() === date.getMonth() &&
				madeAtDate.getFullYear() === date.getFullYear()
			)
		});
	}

	const trainingsByDate = filterTrainingsByDate({ trainings, date })

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md w-10/12">
				<DialogTitle>{dateInString(date)}</DialogTitle>
				<div>
					{trainingsByDate.length === 0
						? <NoTrainingsToDay date={date} />
						: <div className="space-y-5">
							<div>
								{
									trainingsByDate.map(({ id, ...training }) => (
										<TrainingsByDateItem
											key={id}
											training={training}
										/>
									))
								}
							</div>
							<DialogFooter>
								<Button className="w-full">
									Editar Treino
								</Button>
							</DialogFooter>
						</div>
					}
				</div>
			</DialogContent>
		</Dialog>
	)
}
