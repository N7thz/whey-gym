"use client"

import type { UserResponse } from "@/@types"
import { useHttp } from "@/http/api"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import { type ReactNode, createContext, useContext } from "react"

export type CurrentUserContextProps = UseQueryResult<UserResponse>

const CurrentUserContext = createContext({} as CurrentUserContextProps)

export function CurrentUserProvider({ children }: { children: ReactNode }) {
    const http = useHttp()

    const response = useQuery({
        queryKey: ["find-user"],
        queryFn: http.FindUser,
        refetchOnWindowFocus: false,
    })

    const value: CurrentUserContextProps = response

    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => useContext(CurrentUserContext)
