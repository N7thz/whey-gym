import { type NextRequest, NextResponse } from "next/server"
import type { Prisma } from "@prisma/client"
import type { Payload } from "@/@types"
import { AuthenticateService } from "@modules/authenticate/authenticate.service"
import { UserService } from "@modules/user/user.service"
import jwt from "jsonwebtoken"

export async function GET(request: NextRequest) {

    const userService = UserService()
    const authenticateService = AuthenticateService()

    const authorization = request.headers.get("authorization")

    const {
        error, userResponse
    } = await authenticateService.authenticate(authorization)

    if (error) return (
        NextResponse.json(error, {
            status: error.statusCode
        })
    )

    return NextResponse.json(userResponse)
}

export async function POST(request: NextRequest) {
    const authenticateService = AuthenticateService()

    const { email, password } = (await request.json()) as Prisma.UserCreateInput

    const { error, acess_token } = await authenticateService.login({
        email,
        password,
    })

    if (error)
        return NextResponse.json(error, {
            status: error.statusCode,
        })

    return NextResponse.json({ acess_token })
}
