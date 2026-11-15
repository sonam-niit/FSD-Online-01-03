import { Request, Response, NextFunction } from 'express';
import type { AuthUser } from '../types/auth';

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

    if (req.session && req.session.user) {
        return next();
    }
    return res.status(401).json({
        message: "Please Login to continue!"
    })
}

export function authorize(requiredRole: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.session?.user as AuthUser | undefined;

        if (!user) {
            return res.status(401).json({
                message: "Please Login to continue!"
            })
        }
        if (user.role != requiredRole) {
            return res.status(403).json({
                message: "Access Denied. Insufficient Permission."
            })
        }
        next(); // if user has all permission then allow.
    }
}