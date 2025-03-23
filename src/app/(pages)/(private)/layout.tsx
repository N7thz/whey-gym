import { SidebarProvider } from "@/components/ui/sidebar"
import { AsideSidebar } from "@/components/template/sidebar/aside-sidebar"
import { Header } from "@/components/template/header"
import { Toaster } from "@/components/ui/sonner"
import type { ReactNode } from "react"

type PrivateLayoutProps = {
	children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
	return (
		<SidebarProvider defaultOpen={false}>
			<AsideSidebar />
			<div className="flex flex-col w-full">
				<Header />
				<main className="h-[calc(100dvh-4.5rem)] flex">
					{children}
				</main>
			</div>
			<Toaster />
		</SidebarProvider>
	)
}
