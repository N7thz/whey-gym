import { UserService } from "@modules/user/user.service"
import { NextResponse, type NextRequest } from "next/server"

type ContextProps = {
    params: {
        id: string
    }
}

export async function PUT(
    request: NextRequest, { params: { id } }: ContextProps
) {

    const { imageUrl } = await request.json() as { imageUrl: string }

    const userService = UserService()

    const {
        error, userResponse
    } = await userService.updateImage({ id, imageUrl })

    if (error) return (
        NextResponse.json(error, {
            status: error.statusCode
        })
    )

    return NextResponse.json(userResponse)
}
