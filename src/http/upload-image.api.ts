import { api } from "./api"
import type { UserResponse } from "@/@types"
import type { UpdateUserProps } from "@/schemas/update-user-schema"

type UploadImageRequest = UpdateUserProps & {
    id: string
}

export function UploadImage({ id, imageUrl }: UploadImageRequest) {
    return api.put<UserResponse>(`/upload-image/${id}`, { imageUrl })
}
