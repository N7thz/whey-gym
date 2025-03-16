import { NextResponse } from "next/server"
import { UserService } from "@modules/user/user.service"
import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"

const userService = UserService()

export async function POST() {

    const response = Array.from({ length: 10 }).map(async (_, index) => {
        return await prisma.user.create({
            data: {
                email: `email${index}@email.com`,
                password: await hash(index.toString(), 6)
            }
        })

    })

    return NextResponse.json(response)
}

export async function GET() {

    const { count, usersResponse } = await userService.findMany()

    return NextResponse.json({
        data: usersResponse,
        count
    })
}