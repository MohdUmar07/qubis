import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/overview",
  "/api/uploadthing",
]);

export default clerkMiddleware(async (auth, request) => {
  const userId = (await auth()).userId;
  const pathname = request.nextUrl.pathname;

  console.log("Middleware - Auth Check:", { userId, pathname });

  if (isPublicRoute(request)) return NextResponse.next();

  // ✅ Allow users to access their conversation if authenticated
  if (pathname.startsWith("/conversations") && userId) {
    return NextResponse.next();
  }

  // 🔒 Redirect unauthenticated users
  if (!userId) {
    console.log("Redirecting unauthenticated user from a protected route");
    return NextResponse.redirect(new URL("/overview", request.url));
  }

  return NextResponse.next();
});


export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|svg|gif|ico|webp|avif|woff|woff2|ttf|otf|eot)).*)",
    "/(api|trpc)(.*)",
  ],
};
