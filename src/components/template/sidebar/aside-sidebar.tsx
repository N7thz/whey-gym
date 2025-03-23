import {
	Calendar,
	LayoutPanelLeft,
	Search,
	Settings,
	UserRoundPlus,
	UsersRound,
} from "lucide-react"
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
} from "@/components/ui/sidebar"
import { AsideSidebarItem } from "./aside-sidebar-item"
import type { Item } from "@/@types"

const items: Item[] = [
	{
		title: "Home",
		url: "/",
		Icon: LayoutPanelLeft,
	},
	{
		title: "Criar novo usuário",
		url: "/create-account",
		Icon: UserRoundPlus,
	},
	{
		title: "Lista de usuários",
		url: "/users",
		Icon: UsersRound,
	},
	{
		title: "Calendar",
		url: "#",
		Icon: Calendar,
	},
	{
		title: "Search",
		url: "#",
		Icon: Search,
	},
	{
		title: "Settings",
		url: "/settings",
		Icon: Settings,
	},
]

export const AsideSidebar = () => {
	return (
		<Sidebar collapsible="icon">
			<SidebarContent className="bg-background">
				<SidebarGroup>
					<SidebarGroupLabel className="text-base font-light">
						Opções do aplicativo
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{
								items.map(item => (
									<AsideSidebarItem
										key={item.title}
										item={item}
									/>
								))
							}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
