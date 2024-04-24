import { NextFunction } from "express";

const logMiddleware = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(`${req.method} ${req.url}`);
        next();
    }
}

export { logMiddleware }