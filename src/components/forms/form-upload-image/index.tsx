"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ErrorSpan } from "@/components/error-span"
import {
    type UploadImageProps, UploadImageSchema,
} from "@/schemas/upload-image-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { useHttp } from "@/http/api"
import { toast } from "@/components/toast"
import { QueryClient } from "@tanstack/react-query"
import Image from "next/image"
import Icon from "@/app/icon.png"

type FormUploadImageProps = {
    id: string
    oldImage: string | null
    setIsOpen: (open: boolean) => void
}

export const FormUploadImage = ({
    id, oldImage, setIsOpen
}: FormUploadImageProps) => {

    const http = useHttp()
    const client = new QueryClient()

    const {
        watch,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UploadImageProps>({
        resolver: zodResolver(UploadImageSchema)
    })

    const imageUrl = watch("imageUrl")

    function onSubmit({ imageUrl }: UploadImageProps) {
        http
            .UploadImage({ id, imageUrl })
            .then(() => {

                setIsOpen(false)

                toast({
                    title: "A imagem fio atualizada com sucesso.",
                    variant: "sucess",
                    position: "bottom-left"
                })

                client.invalidateQueries({
                    queryKey: "find-user"
                })
            })
            .catch(err => {
                console.log(err)

                reset({ imageUrl: undefined })

                toast({
                    title: "Erro ao atualizar a imagem.",
                    variant: "error",
                    position: "bottom-left"
                })
            })
    }

    const { success } = UploadImageSchema.safeParse({ imageUrl })

    return (
        <>
            <Image
                src={(oldImage && !imageUrl) ? oldImage : success ? imageUrl : Icon}
                width={200}
                height={200}
                alt="image-icon-preview"
                className="mx-auto rounded-full"
            />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-4 space-y-3 w-full"
            >
                <Label className="flex-col">
                    <span>
                        Image url:
                    </span>
                    <Input
                        autoComplete="off"
                        placeholder="Adicione um link para uma imagem."
                        {...register("imageUrl")}
                    />
                </Label>
                {errors.imageUrl && (
                    <ErrorSpan
                        message={errors.imageUrl.message}
                        className="text-lg"
                    />
                )}
                <Button
                    type="submit"
                    variant={"outline"}
                    className={cn(
                        "w-full cursor-pointer",
                        "disabled:cursor-not-allowed mt-2"
                    )}
                    disabled={!imageUrl}
                >
                    Confirmar
                </Button>
            </form>
        </>

    )
}
