import { api } from "./api"
import type { UploadImageProps } from "@/schemas/upload-image-schema"
import type { UserResponse } from "@/@types"

type UploadImageRequest = UploadImageProps & {
    id: string
}

export function UploadImage({ id, imageUrl }: UploadImageRequest) {
    return api.put<UserResponse>(`/upload-image/${id}`, { imageUrl })
}