import type { Exercise } from "@prisma/client"
import { 
    Card, CardContent, CardHeader, CardTitle 
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

type ExerciseItemProps = {
    exercise: Omit<Exercise, "id">
}

export const ExerciseItem = ({
    exercise: { name, reps, series, toFailure }
}: ExerciseItemProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="capitalize">
                    {name}
                </CardTitle>
            </CardHeader>
            <CardContent className="divide-y-2 space-y-3 capitalize">
                <span className="block pb-3">
                    séries: {series}
                </span>
                <span className="block pb-3">
                    repetições: {reps}
                </span>
                <span className="flex items-center justify-between gap-2 normal-case">
                    Até a falha:
                    <Checkbox checked={toFailure} />
                </span>
            </CardContent>
        </Card>
    )
}
