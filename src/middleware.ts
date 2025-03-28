import type { MiddlewareConfig, NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { api } from "./http/api"

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/sign-in"

export const publicRoutes = [
	{ path: "/sign-in", whenAuthenticated: "redirect" },
] as const

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	const publicRoute = publicRoutes.find((route) => route.path === path)
	const authToken = request.cookies.get("token")

	if (path === "/") {

		const redirectUrl = request.nextUrl.clone()

		redirectUrl.pathname = "/calendar"

		return NextResponse.redirect(redirectUrl)
	}

	if (!authToken && publicRoute) {
		return NextResponse.next()
	}

	if (!authToken && !publicRoute) {

		const redirectUrl = request.nextUrl.clone()

		redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

		return NextResponse.redirect(redirectUrl)
	}

	if (
		authToken &&
		publicRoute &&
		publicRoute.whenAuthenticated === "redirect"
	) {
		const redirectUrl = request.nextUrl.clone()

		redirectUrl.pathname = "/calendar"

		return NextResponse.redirect(redirectUrl)
	}

	if (authToken && !publicRoute) {

		const redirectUrl = request.nextUrl.clone()

		const response = await api
			.get("/authenticate", {
				headers: {
					Authorization: `Bearer ${authToken.value}`,
				}
			})
			.then(() => {
				return NextResponse.next()
			})
			.catch((err) => {

				console.log(err)

				return NextResponse.redirect(redirectUrl)
			})

		return response
	}

	return NextResponse.next()
}

export const config: MiddlewareConfig = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public/).*)"],
}
