import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {;
  const dummyUser = {
    role: 'admins',
    email: 'test@gmail.com'
  };

 let isServicePage = request.nextUrl.pathname.startsWith('/service');
 let isAdmin = dummyUser.role === 'admin';
 //now user is admin so he can access the service page, if u change the role user will be redirected to login page
  if (!isAdmin && isServicePage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

 
//  console.log('isServicePage:', isServicePage);
  return NextResponse.next();
}