import { NextResponse } from 'next/server';
export function middleware(req) {
  const country = req.headers.get('x-vercel-ip-country') || 'US';
  const allowed = ['RU', 'BY', 'KZ', 'AM', 'AZ', 'KG', 'TJ', 'UZ', 'MD'];
  if (!allowed.includes(country)) {
    return new NextResponse('Access Denied', { status: 403 });
  }
  return NextResponse.next();
}
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
