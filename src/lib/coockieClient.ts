import { getCookie } from "cookies-next";

export function getCoockieClient() {
    const token = getCookie("session");

    return token;
}