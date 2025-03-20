import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import type { Exercise } from "@prisma/client"

export const ExercisesItem = ({
    exercise: {
        name, reps, series, toFailure
    }
}: { exercise: Omit<Exercise, "id"> }) => {
    return (
        <Card className="rounded-md">
            <CardHeader>
                <CardTitle className="capitalize">{name}</CardTitle>
            </CardHeader>
            <CardContent className="divide-y space-y-2">
                <div className="flex items-center gap-2 text-base pb-2">
                    até a falha:
                    <Checkbox checked={toFailure} className="size-5" />
                </div>
                <div className="flex justify-between items-center">
                    <span className="capitalize w-1/2">series: {series}</span>
                    <div className="h-4 w-px border" />
                    <span className="capitalize w-1/2 text-end">repetições: {reps}</span>
                </div>
            </CardContent>
        </Card>
    )
}
