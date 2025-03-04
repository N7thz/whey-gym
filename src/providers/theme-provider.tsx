"use client"

import type { ComponentProps } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider> & {
    defaultTheme: DefaultTheme
}

type DefaultTheme = "light" | "dark" | "system"

export function ThemeProvider({
    children,
    defaultTheme,
    ...props
}: ThemeProviderProps) {
    return (
        <NextThemesProvider
            defaultTheme={defaultTheme}
            {...props}
        >
            {children}
        </NextThemesProvider>
    )
}
