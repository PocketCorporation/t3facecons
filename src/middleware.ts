import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();
// import { withClerkMiddleware } from "@clerk/nextjs/server"
// import { NextResponse } from "next/server"

// export default withClerkMiddleware(()=>{
//     console.log('middleware')
//     return NextResponse.next()
// })

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};