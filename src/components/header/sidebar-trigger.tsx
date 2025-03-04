"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ChevronsLeft } from "lucide-react"
import { cn } from "@/lib/utils"

export const SidebarTrigger = () => {
	const { state, toggleSidebar } = useSidebar()

	return (
		<Button
			variant={"outline"}
			size={"icon"}
			onClick={toggleSidebar}
			className={cn(
				"duration-300",
				state === "collapsed" && "rotate-180",
			)}
		>
			<ChevronsLeft />
		</Button>
	)
}
