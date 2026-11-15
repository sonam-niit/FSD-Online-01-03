import type { AuthUser } from "./auth";

declare module 'express-session' {
    interface SessionData {
        user?:AuthUser
    }
}