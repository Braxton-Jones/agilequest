import { NextResponse } from 'next/server';

export function middleware(req) {
 if (req.nextUrl.pathname === '/api/auth/callback') {
  // Rebuild the URL with the correct protocol and host due to new changes
    const protocol = req.headers.get('x-forwarded-proto') || 'http';
    const host = req.headers.get('host');
    const redirectUrl = `${protocol}://${host}/dashboard`;
    return NextResponse.redirect(redirectUrl);
 }
 return NextResponse.next();
}

export const config = {
  matcher: '/api/auth/callback',
}