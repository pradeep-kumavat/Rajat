// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// export function middleware(request: NextRequest) {
//     const path = request.nextUrl.pathname

//     const isPublicPath = path === '/sign-in' || path === '/sign-up' || path === '/verifyemail' 

//     const token = request.cookies.get("token")?.value || ''
//     if(isPublicPath && token){
//         return NextResponse.redirect(new URL('/', request.url))
//     }
//     if(!isPublicPath && !token){
//         return NextResponse.redirect(new URL('/sign-in', request.url))
//     }
    
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//     '/',
//     '/sign-in',
//     '/sign-up',
//   ]
// }