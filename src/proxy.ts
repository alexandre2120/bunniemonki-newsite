import { NextResponse, type NextRequest } from "next/server";

const portugueseDefaultCountries = new Set(["PT", "BR"]);

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country")?.trim().toUpperCase();
  const locale = country && portugueseDefaultCountries.has(country) ? "pt" : "en";
  const redirectUrl = request.nextUrl.clone();

  redirectUrl.pathname = `/${locale}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: "/",
};
