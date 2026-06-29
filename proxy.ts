import { NextRequest, NextResponse } from 'next/server';
import { ROUTES } from '@/constants/routes';

const SESSION_COOKIE_NAME = 'session_token';

export function proxy(request: NextRequest) {
  const sessionToken = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionToken) {
    const loginUrl = new URL(ROUTES.ADMIN.LOGIN, request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
