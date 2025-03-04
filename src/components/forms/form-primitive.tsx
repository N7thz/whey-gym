import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"
import { FormProvider, type UseFormReturn } from "react-hook-form"

type FormProps = ComponentProps<"form"> & {
	methods: UseFormReturn<any>
}

export const Form = ({ methods, className, ...props }: FormProps) => {
	return (
		<FormProvider {...methods}>
			<form
				className={cn("size-full flex flex-col justify-between", className)}
				{...props}
			/>
		</FormProvider>
	)
}
