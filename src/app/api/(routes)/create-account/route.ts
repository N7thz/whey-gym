import { NextResponse, type NextRequest } from "next/server"
import { UserService } from "../../modules/user/user.service"
import { Prisma } from "@prisma/client"
import { HttpStatus } from "@/@types"

export async function GET(request: NextRequest) {
    return NextResponse.json("teste dos guri")
}

export async function POST(request: NextRequest) {

    const { email, password } = await request.json() as Prisma.UserCreateInput

    const userService = UserService()

    const { error, user } = await userService.create({ email, password })

    if (error) return NextResponse.json(
        error, {
        status: HttpStatus.CONFLICT
    })

    return NextResponse.json(user)
}