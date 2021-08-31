
import { Request, Response, NextFunction } from "express";
let token: string;

export const authenticateUser = (req: Request, res: Response) => {
        token = req.body.authParams;
}

export const getToken = (): string => {
        return token;
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
        const clientToken = req.headers.token;
        if (token === clientToken) {
                next();
        } else {
                return res.status(401).json({ message: 'No Authorization' });
        }
}