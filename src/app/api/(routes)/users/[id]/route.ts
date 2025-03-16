import { HttpStatus } from "@/@types/http-status"
import { UserService } from "@modules/user/user.service"
import { NextResponse, type NextRequest } from "next/server"

type ContextProps = {
    params: {
        id: string
    }
}

const userService = UserService()

export async function DELETE(_: unknown, { params: { id } }: ContextProps) {

    const { error } = await userService.remove(id)

    if (error) return NextResponse.json(error, {
        status: error.statusCode
    })

    return NextResponse.json({ message: "Usuario excluido com sucesso." })
}
