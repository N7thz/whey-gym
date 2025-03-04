import { SidebarProvider } from "@/components/ui/sidebar"
import { AsideSidebar } from "@/components/sidebar/aside-sidebar"
import { Header } from "@/components/header"
import type { ReactNode } from "react"

type PrivateLayoutProps = {
	children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
	return (
		<SidebarProvider defaultOpen={false}>
			<AsideSidebar />
			<main className="min-h-dvh w-full flex flex-col">
				<Header />
				{children}
			</main>
		</SidebarProvider>
	)
}
