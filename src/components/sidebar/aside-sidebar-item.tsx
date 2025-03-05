import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import type { Item } from "@/@types"
import Link from "next/link"

export const AsideSidebarItem = ({ item }: { item: Item }) => {
	const { Icon, title, url } = item

	return (
		<SidebarMenuItem>
			<SidebarMenuButton asChild>
				<Link href={url}>
					<Icon />
					<span>{title}</span>
				</Link>
			</SidebarMenuButton>
		</SidebarMenuItem>
	)
}
