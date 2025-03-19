import { SidebarProvider } from "@/components/ui/sidebar"
import { AsideSidebar } from "@/components/sidebar/aside-sidebar"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/sonner"
import type { ReactNode } from "react"

type PrivateLayoutProps = {
	children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
	return (
		<SidebarProvider defaultOpen={false}>
			<AsideSidebar />
			<div className="flex flex-col">
				<Header />
				<main className="h-[calc(100dvh-4.5rem)]">
					{children}
				</main>
			</div>
			<Toaster />
		</SidebarProvider>
	)
}
