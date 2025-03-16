import { MainCalendar } from "@/components/calendar/main-calendar"
import { ChangeView } from "@/components/change-view"
import { MainList } from "@/components/main/main-list"
import type { Metadata } from "next"
import { MainLayout } from "@/components/main/main-layout"

export type HomeParams = {
	params: {
		view: "calendar" | "list"
	}
}

export function generateMetadata({
	params: { view }
}: HomeParams): Metadata {
	return {
		title: `Whey Gym | ${view === "calendar" ? "Calendario" : "Home"}`
	}
}

export default function Home({ params: { view } }: HomeParams) {
	return (
		<div className="flex-1 justify-center items-center p-6 space-y-4">
			<ChangeView />
			<MainLayout view={view} />
		</div>
	)
}
