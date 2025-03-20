import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import type { TrainingWithExercise } from "@/@types"
import { ExercisesItem } from "./exercises-item"
import { DialogCalendarFooter } from "./dialog-calendar-footer"


type DialogCalendarContentProps = {
  training: TrainingWithExercise
}

export const DialogCalendarContent = ({
  training: { id, obs, exercises, name },
}: DialogCalendarContentProps) => {
  return (
    <DialogContent>
      <DialogTitle>
        {name}
      </DialogTitle>
      {obs && <DialogDescription>{obs}</DialogDescription>}
      <div className="space-y-4">
        {
          exercises.map(({ id, ...exercise }) => (
            <ExercisesItem
              key={id}
              exercise={exercise}
            />
          ))
        }
      </div>
      <DialogCalendarFooter id={id} />
    </DialogContent>
  )
}
