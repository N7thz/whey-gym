"use client"

import { SidebarTrigger } from "@/components/header/sidebar-trigger"
import { SheetAvatar } from "@/components/sheet-avatar"

export const Header = () => {
	return (
		<header className="h-18 w-full flex items-center justify-between p-4 border-b-2 border-sidebar-border">
			<SidebarTrigger />
			<SheetAvatar />
		</header>
	)
}
