import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "h-10 w-56 bg-primary/10 animate-pulse rounded-md", className
      )}
      {...props}
    />
  )
}

export { Skeleton }
