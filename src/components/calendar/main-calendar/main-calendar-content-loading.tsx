import { CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const MainCalendarContentLoading = () => {
	return (
		<div className="w-full h-100 overflow-hidden">
			<CardContent className="size-full grid grid-cols-7 gap-2 py-3 pl-0">
				{
					Array.from({ length: 31 }).map((_, index) => (
						<div key={index}>
							<Skeleton className="w-full h-32 border p-1 rounded-md bg-muted" />
						</div>
					))
				}
			</CardContent>
		</div>
	)
}
