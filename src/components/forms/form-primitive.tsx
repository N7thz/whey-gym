import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"
import { FormProvider, type UseFormReturn } from "react-hook-form"
import type { SigninProps } from "@/schemas/sign-in-schema"
import type { CreateAccountProps } from "@/schemas/create-account-schema"

type UseFormReturnProps = SigninProps | CreateAccountProps

type FormProps = ComponentProps<"form"> & {
	methods: UseFormReturn<UseFormReturnProps>
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
