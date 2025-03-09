import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormContext } from "react-hook-form"
import type { UpdateUserProps } from "@/schemas/update-user-schema"
import { UploadImageSchema } from "@/schemas/upload-image-schema"
import { cn } from "@/lib/utils"
import Icon from "@/app/icon.png"
import Image from "next/image"

export const LabelImage = () => {

    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext<UpdateUserProps>()

    const imageUrl = watch("imageUrl")

    const { success } = UploadImageSchema.safeParse({ imageUrl })

    const image = (success && imageUrl) ? imageUrl : Icon

    return (
        <Label className="flex-col">
            <span>Image url:</span>
            <div className="w-full flex gap-2 justify-between">
                <Input
                    autoComplete="off"
                    placeholder={
                        errors.imageUrl
                            ? errors.imageUrl.message
                            : "Adicione um link para uma imagem."
                    }
                    className={cn(
                        errors.imageUrl && [
                            "ring-1 ring-destructive",
                            "focus-visible:ring-destructive",
                            "placeholder:text-destructive placeholder:italic",
                        ]
                    )}
                    {...register("imageUrl")}
                />
                <Image
                    src={image}
                    width={40}
                    height={40}
                    alt="image-icon-preview"
                    className="mx-auto rounded-full aspect-square"
                />
            </div>
        </Label>
    )
}
