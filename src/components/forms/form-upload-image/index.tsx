"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    type UploadImageProps, UploadImageSchema,
} from "@/schemas/upload-image-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Image from "next/image"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ErrorSpan } from "@/components/error-span"
import Icon from "@/app/icon.png"

export const FormUploadImage = () => {

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UploadImageProps>({
        resolver: zodResolver(UploadImageSchema)
    })

    const imageUrl = watch("imageUrl")

    function onSubmit(data: UploadImageProps) {
        console.log(data)
    }

    const { success } = UploadImageSchema.safeParse({ imageUrl })

    return (
        <>
            <Image
                src={success ? imageUrl : Icon}
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
