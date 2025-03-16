"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar, List } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

export const ChangeView = () => {

    const { push } = useRouter()
    const { view } = useParams<{ view: "calendar" | "list" }>()

    return (
        <RadioGroup
            defaultValue={view}
            className="flex gap-4"
            onValueChange={value => push(`/${value}`)}
        >
            <div className="flex items-center space-x-2">
                <RadioGroupItem id="calendar" value="calendar" />
                <Label htmlFor="calendar" className="flex items-center text-lg">
                    Calendario
                    <Calendar className="size-4" />
                </Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem id="list" value="list" />
                <Label htmlFor="list" className="flex items-center text-lg">
                    Lista
                    <List className="size-4" />
                </Label>
            </div>
        </RadioGroup>
    )
}
