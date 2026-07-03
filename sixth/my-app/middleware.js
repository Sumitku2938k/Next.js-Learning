// import { NextResponse } from 'next/server';

// export function middleware(request) {

  // return NextResponse.json({ message: 'This is a middleware response' });

  // Example: Redirect to a different page if a condition is met
//   return NextResponse.redirect(new URL('/', request.url));
// }

//See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// };

import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/', request.url));  //Rewrite means the URL will be changed to the new URL, but the user will still see the original content in the browser's address bar.
  }
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}