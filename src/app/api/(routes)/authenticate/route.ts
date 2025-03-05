import { type NextRequest, NextResponse } from "next/server"
import { AuthenticateService } from "@modules/authenticate/authenticate.service"
import type { Prisma } from "@prisma/client"

export async function POST(request: NextRequest) {
    const authenticateService = AuthenticateService()

    const { email, password } = (await request.json()) as Prisma.UserCreateInput

    const { error, userResponse } = await authenticateService.login({
        email, password
    })

    if (error) return (
        NextResponse.json(error, {
            status: error.statusCode
        })
    )

    return NextResponse.json(userResponse)
}