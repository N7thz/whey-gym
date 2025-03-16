import type { TrainingWithExercise } from "@/@types"
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import { ExerciseItem } from "./exercise-item"
import { Dumbbell } from "lucide-react"

type TrainingsByDateItemProps = {
    training: Omit<TrainingWithExercise, "id">
}

export const TrainingsByDateItem = ({
    training: { exercises, name, obs }
}: TrainingsByDateItemProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between">
                    {name}
                    <Dumbbell className="size-4"/>
                </CardTitle>
                {
                    obs && <CardDescription>
                        {obs}
                    </CardDescription>
                }
            </CardHeader>
            <CardContent className="space-y-4">
                {
                    exercises.map(({ id, ...exercise }) => (
                        <ExerciseItem
                            key={id}
                            exercise={exercise}
                        />
                    ))
                }
            </CardContent>
        </Card>
    )
}
