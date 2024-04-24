import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/requestExt.interface";

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const payload = verifyToken(`${jwt}`)
        if(!payload) {
            res.status(401).send('INVALID_TOKEN')
        }
        req.decoded = payload;
        console.log('payload ', payload);
        next();
    } catch (err) {
        res.status(400).send('INVALID_TOKEN')
    }
}

export { checkJWT }