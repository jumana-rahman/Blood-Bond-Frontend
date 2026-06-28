// middleware.js
import { NextResponse } from "next/server";

export async function proxy(request) {
  const pathname = request.nextUrl.pathname;

  // Fetch session from Better Auth's session endpoint using current cookies
  const sessionRes = await fetch(
    `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/auth/get-session`,
    {
      headers: {
        cookie: request.headers.get("cookie") ?? "",
      },
    }
  );

  const session = sessionRes.ok ? await sessionRes.json() : null;
  const role = session?.user?.role ?? null;

  // Login required
  if (pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Admin
    if (pathname.startsWith("/dashboard/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    // Trainer
    if (pathname.startsWith("/dashboard/volunteer") && role !== "volunteer") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    // Member
    if (pathname.startsWith("/dashboard/donor") && role !== "donor") {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  // Redirect authenticated users away from login/register
  if (session && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard/member", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};