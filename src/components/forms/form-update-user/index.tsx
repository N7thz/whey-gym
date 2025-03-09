"use client"

import { AlertDialogCancel } from "@/components/ui/alert-dialog"
import { LabelEmail } from "@/components/forms/label-email"
import { LabelImage } from "./label-image"
import { Form } from "@/components/forms/form-primitive"
import { useForm } from "react-hook-form"
import { useCurrentUser } from "@/providers/user-provider"
import {
    type UpdateUserProps, UpdateUserSchema,
} from "@/schemas/update-user-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"

export const FormUpdateUser = () => {

    const { data: user } = useCurrentUser()

    const methods = useForm<UpdateUserProps>({
        resolver: zodResolver(UpdateUserSchema),
        defaultValues: {
            email: user?.email,
            imageUrl: user?.imageUrl ?? undefined,
        },
    })

    const { handleSubmit, watch } = methods

    const email = watch("email")
    const imageUrl = watch("imageUrl")

    function onSubmit(data: UpdateUserProps) {
        console.log(data)
    }

    return (
        <Form
            methods={methods}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
        >
            <div className="space-y-6">
                <LabelEmail />
                <LabelImage />
            </div>
            <div className="w-full flex gap-2">
                <AlertDialogCancel
                    type="button"
                    className="w-1/2"
                >
                    Cancelar
                </AlertDialogCancel>
                <Button
                    type="submit"
                    className="w-1/2"
                    disabled={
                        email === user?.email &&
                        imageUrl === user?.imageUrl
                    }
                >
                    Confirmar
                </Button>
            </div>
        </Form>
    )
}
