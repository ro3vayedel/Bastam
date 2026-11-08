import { NextResponse, type NextRequest } from "next/server";

/**
 * Exposes the requested locale (?lang=en|ar) via the "x-locale" request header
 * so that the root layout can render <html lang dir> correctly on the server.
 * Persian (fa) is the default locale served from "/".
 */
export default function proxy(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang");
  const locale = lang === "en" || lang === "ar" ? lang : "fa";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/"],
};
