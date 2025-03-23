import { Settings } from "@/components/template/settings"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Whey Gym | Configurações"
}

export default function Config() {
    return (
        <div className="flex-1 flex items-center justify-center bg-red-500">
            <Settings />
        </div>
    )
}
