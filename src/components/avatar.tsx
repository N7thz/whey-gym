import {
	Avatar as AvatarPrimitive,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"
import { UserRound } from "lucide-react"
import type { ComponentProps } from "react"

type AvatarProps = ComponentProps<"div"> & {
	src?: string | null
	size?: number
	alt?: string
}

export const Avatar = ({
	src, size, alt, className, children
}: AvatarProps) => {

	const imageUrl = src ?? undefined

	return (
		<AvatarPrimitive className={className}>
			<AvatarImage
				src={imageUrl}
				alt={alt}
			/>
			<AvatarFallback>
				{
					children
						? children
						: <UserRound size={size} />
				}
			</AvatarFallback>
		</AvatarPrimitive>
	)
}
