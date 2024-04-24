import { Request, Response } from "express";
import {registerNewUser, loginUser} from "../services/auth";

const registerCtrl = async ({body}: Request, res: Response) => {
    const responseUser = await registerNewUser(body);

    return res.status(201).json(responseUser);
};
const loginCtrl = async ({body}: Request, res: Response) => {
    const {email, password} = body;
    const responseUser = await loginUser({email, password});

    if(responseUser === 'WRONG_CREDENTIALS') return res.status(403).json(responseUser);

    return res.status(200).json(responseUser);
};

export { registerCtrl, loginCtrl };