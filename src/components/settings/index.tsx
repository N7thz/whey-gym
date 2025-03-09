"use client"

import {
    Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "@/components/ui/card"
import { Avatar } from "@/components/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useCurrentUser } from "@/providers/user-provider"
import { UserRoundPen, UserRoundX } from "lucide-react"
import { DialogUpdateUser } from "./dialog-update-user"

export const Settings = () => {

    const { data: user, isLoading } = useCurrentUser()

    if (!user || isLoading) return <p>Carregando...</p>

    const {
        id, email, imageUrl, role
    } = user

    return (
        <div className="contents">
            <Card className="w-3/7 h-1/4 flex-row gap-1">
                <CardContent className="self-start">
                    <Avatar
                        src={imageUrl}
                        alt="user-image"
                        className="size-36"
                    />
                </CardContent>
                <Separator orientation="vertical" />
                <div className="size-full flex flex-col justify-between">
                    <CardHeader className="self-start">
                        <CardTitle>
                            {email}
                        </CardTitle>
                        <CardDescription>
                            <span>
                                ROLE: {role}
                            </span>
                            <span className="block whitespace-nowrap">
                                ID: {id}
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="w-full gap-2 justify-between">
                        <DialogUpdateUser />
                        <Button>
                            <UserRoundX />
                            Excluir Conta
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        </div>
    )
}
