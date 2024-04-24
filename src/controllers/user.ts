import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getCommunity = (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        handleHttp(res, "ERROR_GET_USER")
    }
}

const getCommunities = (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        handleHttp(res, "ERROR_GET_USERS")
    }
}

const createCommunity = ({ body }: Request, res: Response) => {
    try {
        res.send(body)
    } catch (err) {
        handleHttp(res, "ERROR_CREATE_USER")
    }
}

const updateCommunity = (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        handleHttp(res, "ERROR_UPDATE_USER")
    }
}

const deleteCommunity = (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        handleHttp(res, "ERROR_DELETE_USER")
    }
}

export { getCommunity, getCommunities, createCommunity, updateCommunity, deleteCommunity }