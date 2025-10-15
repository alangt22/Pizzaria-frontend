import { NextRequest, NextResponse } from "next/server";
import { getCoockieServer } from "./lib/coockieServer";
import { api } from "./services/app";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname === "/"){
    return NextResponse.next();
  }
    
  const token = await getCoockieServer();

  if(pathname.startsWith("/dashboard")){
    if(!token){
      return NextResponse.redirect(new URL("/", req.url));
    }

    const isValid = await validateToken(token);

    if(!isValid){
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
  
}


async function validateToken(token: string) {
    if(!token){
        return false;
    }

    try {
        await api.get("/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return true
    } catch (error) {
        console.log(error);
        return false;
    }
}
