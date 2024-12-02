import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host");

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

  return NextResponse.redirect(
    new URL("/personal-portfolio", request.url),
    301
  );
}

export const config = {
  matcher: "/",
};
