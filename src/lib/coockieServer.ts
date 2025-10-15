import { cookies } from "next/headers";

export async function getCoockieServer(){
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value;

    
    return token || null;
}