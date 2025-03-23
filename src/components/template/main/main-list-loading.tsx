import { Skeleton } from "@/components/ui/skeleton"

export const MainListLoading = () => {
	return (
		<div className="space-y-3">
			{
				Array.from({ length: 5 }).map((_, index) => (
					<Skeleton key={index} />
				))
			}
		</div>
	)
}
