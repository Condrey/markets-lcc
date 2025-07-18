import { validateRequest } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  try {
    console.log("Middleware triggered for:", request.url);
    const { user, session } = await validateRequest();
    if (!request.nextUrl.pathname.startsWith("/login")) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set(
        "next",
        request.nextUrl.pathname + request.nextUrl.search,
      );
      return NextResponse.redirect(loginUrl);
    }

    if (request.method === "GET") {
      const response = NextResponse.next();
      const token = request.cookies.get("oauth_session")?.value ?? null;
      if (token !== null) {
        // Only extend cookie expiration on GET requests since we can be sure
        // a new session wasn't set when handling the request.
        response.cookies.set("oauth_session", token, {
          path: "/",
          maxAge: 60 * 60 * 24 * 30,
          sameSite: "lax",
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });
      }
      return response;
    }

    const originHeader = request.headers.get("Origin");
    // NOTE: You may need to use `X-Forwarded-Host` instead
    const hostHeader = request.headers.get("Host");
    if (originHeader === null || hostHeader === null) {
      return new NextResponse(null, {
        status: 403,
      });
    }
    let origin: URL;
    try {
      origin = new URL(originHeader);
    } catch {
      return new NextResponse(null, {
        status: 403,
      });
    }
    if (origin.host !== hostHeader) {
      return new NextResponse(null, {
        status: 403,
      });
    }
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return new NextResponse(null, { status: 500 });
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|login|signup).*)"],
};
