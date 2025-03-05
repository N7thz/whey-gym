import type { UserResponse } from "@/@types"
import type { User } from "@prisma/client"

export function setUserResponse(user: User): UserResponse {
    return {
        id: user.id,
        email: user.email,
        imageUrl: user.imageUrl,
        role: user.role,
    }
}