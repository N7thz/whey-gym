import {
    Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
} from "@/components/ui/card"
import { Avatar } from "@/components/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Ellipsis } from "lucide-react"

export const Loading = () => {
    return (
        <Card className="w-3/7 h-1/4 flex-row gap-1">
            <CardContent className="self-start">
                <Avatar
                    src={null}
                    alt="user-image"
                    className="size-36"
                />
            </CardContent>
            <Separator orientation="vertical" />
            <div className="size-full flex flex-col justify-between">
                <CardHeader className="self-start">
                    <CardTitle>
                        <Skeleton className="w-68 h-6" />
                    </CardTitle>
                    <CardDescription className="space-y-1">
                        <Skeleton className="w-48 h-4" />
                        <Skeleton className="w-58 h-4" />
                    </CardDescription>
                </CardHeader>
                <CardFooter className="w-full gap-2 justify-between">
                    <Button className="w-1/2">
                        <Ellipsis />
                    </Button>
                    <Button className="w-1/2">
                        <Ellipsis />
                    </Button>
                </CardFooter>
            </div>
        </Card>
    )
}
