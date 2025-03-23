import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import type { TrainingWithExercise } from "@/@types"
import { Textarea } from "../ui/textarea"
import { Form } from "./form-primitive"
import { useForm } from "react-hook-form"
import {
    editTrainingSchema, type EditTrainingProps
} from "@/schemas/edit-training-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

export const FormEditTraining = ({
    training: { name, obs, exercises },
}: { training: TrainingWithExercise }) => {

    const methods = useForm<EditTrainingProps>({
        resolver: zodResolver(editTrainingSchema),
        defaultValues: {
            name,
            obs,
            exercises
        }
    })

    const { register, handleSubmit, formState: { errors } } = methods

    return (
        <Form
            methods={methods}
            className="size-10/12"
            onSubmit={handleSubmit((data) => {
                console.log(data)
            })}
        >
            <Card className="size-full">
                <CardHeader>
                    <CardTitle className="text-2xl">Editar Treino</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex justify-between divide-x-2 gap-6">
                    <div className="w-1/2 pr-6 space-y-6">
                        <Label htmlFor="name" className="flex flex-col gap-2">
                            <span>Nome:</span>
                            <Input id="name" {...register("name")} />
                        </Label>
                        <Label htmlFor="obs" className="flex flex-col gap-2">
                            <span>Obs:</span>
                            <Textarea id="obs" {...register("obs")} />
                        </Label>
                    </div>
                    <Card className="w-1/2">
                        <CardHeader>
                            <CardTitle>Exercícios</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="w-full h-96 space-y-6">
                                {exercises.map(({
                                    id, name, reps, series, toFailure
                                }, index) => (
                                    <div
                                        key={id}
                                        className="w-full space-y-3 mt-6 border p-4 rounded-md"
                                    >
                                        <Label
                                            htmlFor="exercise_name"
                                            className="flex flex-col gap-2 "
                                        >
                                            <span>Nome: </span>
                                            <Input
                                                id="exercise_name"
                                                {...register(`exercises.${index}.name`)}
                                            />
                                        </Label>
                                        <Label
                                            htmlFor="exercise_reps"
                                            className="flex flex-col gap-2"
                                        >
                                            <span>Repetições: </span>
                                            <Input
                                                id="exercise_reps"
                                                type="number"
                                                {...register(`exercises.${index}.reps`)}
                                            />
                                        </Label>
                                        <Label
                                            htmlFor="exercise_series"
                                            className="flex flex-col gap-2"
                                        >
                                            <span>Series: </span>
                                            <Input
                                                id="exercise_series"
                                                type="number"
                                                {...register(`exercises.${index}.series`)}
                                            />
                                        </Label>
                                    </div>
                                ))}
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </CardContent>
                <CardFooter>
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Confirmar
                    </Button>
                </CardFooter>
            </Card>
        </Form>
    )
}
