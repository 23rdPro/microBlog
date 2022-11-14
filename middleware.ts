import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export function middleware(request: NextRequest){ // export this todo
    const url = request.nextUrl.clone()
    if (url.pathname === '/'){
        url.pathname = '/articles'

        return NextResponse.redirect(url)
    }
}
