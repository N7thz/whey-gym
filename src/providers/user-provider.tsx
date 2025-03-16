"use client"

import type { UserResponse } from "@/@types"
import { useHttp } from "@/http/api"
import { queryClient } from "@/lib/query-client"
import { useQuery, type UseQueryResult } from "@tanstack/react-query"
import { getCookie } from "cookies-next/client"
import { type ReactNode, createContext, useContext, useEffect } from "react"

export type CurrentUserContextProps = UseQueryResult<UserResponse>

const CurrentUserContext = createContext({} as CurrentUserContextProps)

export function CurrentUserProvider({ children }: { children: ReactNode }) {

    const http = useHttp()
    const token = getCookie("token")

    const queryKey = ["find-user", token]

    const response = useQuery({
        queryKey,
        queryFn: http.FindUser,
        refetchOnWindowFocus: false,
    })

    const value: CurrentUserContextProps = response

    useEffect(() => {
        if (response.status === "error") {
            queryClient.invalidateQueries({ queryKey })
        }
    }, [response])



    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export const useCurrentUser = () => useContext(CurrentUserContext)
