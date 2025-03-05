import { NextResponse } from "next/server"
import { UserService } from "@modules/user/user.service"

export async function GET() {

    const userService = UserService()

    const { count, usersResponse } = await userService.findMany()

    return NextResponse.json({
        data: usersResponse,
        count
    })
}