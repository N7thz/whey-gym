"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ErrorSpan } from "@/components/error-span"
import { cn } from "@/lib/utils"
import { type FormUploadImageProps, useUploadImage } from "./use-upload-image"
import Image from "next/image"

export const FormUploadImage = ({
    id,
    oldImage,
    setIsOpen,
}: FormUploadImageProps) => {

    const {
        image,
        imageUrl,
        errors,
        handleSubmit,
        onSubmit,
        register,
    } = useUploadImage({ id, oldImage, setIsOpen, })

    return (
        <>
            <Image
                src={image}
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
                    <span>Image url:</span>
                    <Input
                        autoComplete="off"
                        placeholder="Adicione um link para uma imagem."
                        {...register("imageUrl")}
                    />
                </Label>
                {errors.imageUrl && (
                    <ErrorSpan message={errors.imageUrl.message} className="text-lg" />
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
