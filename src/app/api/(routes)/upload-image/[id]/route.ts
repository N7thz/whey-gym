import type { ContextProps } from "@/@types"
import { UserService } from "@modules/user/user.service"
import { NextResponse, type NextRequest } from "next/server"

const userService = UserService()

export async function PUT(
    request: NextRequest,
    { params: { id } }: ContextProps
) {
    const { imageUrl } = (await request.json()) as { imageUrl: string }

    const { error, userResponse } = await userService.updateImage({
        id,
        imageUrl,
    })

    if (error)
        return NextResponse.json(error, {
            status: error.statusCode,
        })

    return NextResponse.json(userResponse)
}
