import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const acceptedTypes = new Map(
    (request.headers.get("accept") ?? "").split(",").map((entry) => {
      const [type, ...parameters] = entry.trim().toLowerCase().split(";");
      const quality = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith("q="));

      return [type.trim(), quality ? Number(quality.slice(2)) : 1];
    })
  );
  const markdownQuality = acceptedTypes.get("text/markdown") ?? 0;
  const htmlQuality =
    acceptedTypes.get("text/html") ??
    acceptedTypes.get("text/*") ??
    acceptedTypes.get("*/*") ??
    0;
  return (
    (request.method === "GET" || request.method === "HEAD") &&
    markdownQuality > 0 &&
    markdownQuality >= htmlQuality
      ? NextResponse.rewrite(new URL("/profile.md", request.url))
      : NextResponse.next()
  );
}

export const config = {
  matcher: "/",
};
