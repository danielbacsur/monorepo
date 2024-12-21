import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host");
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    if (hostname?.includes("danielbacsur.com")) {
      return NextResponse.redirect(
        new URL("https://danielbacsur.com/personal-portfolio"),
        301
      );
    }

    if (hostname?.includes("danielbacsur.dev")) {
      return NextResponse.redirect(
        new URL("https://danielbacsur.com/developer-portfolio"),
        301
      );
    }
  }

  if (pathname.startsWith("/projects")) {
    if (hostname?.endsWith(".dev")) {
      const newUrl = new URL(request.url);
      newUrl.host = hostname.replace(".dev", ".com");
      return NextResponse.redirect(newUrl, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/projects/:path"],
};
