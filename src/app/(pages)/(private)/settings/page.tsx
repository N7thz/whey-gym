import { Settings } from "@/components/settings"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Whey Gym | Configurações"
}

export default function Config() {
    return (
        <div className="flex-1 flex items-center justify-center">
            <Settings />
        </div>
    )
}
