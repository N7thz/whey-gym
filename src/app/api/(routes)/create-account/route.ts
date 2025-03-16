import { NextResponse, type NextRequest } from "next/server"
import { UserService } from "@modules/user/user.service"
import { HttpStatus } from "@/@types/http-status"
import type { Prisma } from "@prisma/client"

const userService = UserService()

export async function GET() {
    return NextResponse.json("teste dos guri")
}

export async function POST(request: NextRequest) {

    const { email, password } = (await request.json()) as Prisma.UserCreateInput

    const { 
        error, 
        userResponse 
    } = await userService.create({ email, password })

    if (error) return (
        NextResponse.json(error, {
            status: error.statusCode,
        })
    )

    return NextResponse.json(userResponse, {
        status: HttpStatus.CREATED
    })
}