import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCommunityService, getCommunitiesService, getCommunityService, updateCommunityService, deleteCommunityService } from "../services/community";

const getCommunity = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getCommunityService(id);
        const data = response ? response : "Community not found";
        res.send(data);
    } catch (err) {
        handleHttp(res, "ERROR_GET_COMMUNITY", err)
    }
}

const getCommunities = async (req: Request, res: Response) => {
    try {
        const response = await getCommunitiesService();
        res.send(response);
    } catch (err) {
        handleHttp(res, "ERROR_GET_COMMUNITIES", err)
    }
}

const createCommunity = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertCommunityService(body);
        res.send(response);
    } catch (err) {
        handleHttp(res, "ERROR_CREATE_COMMUNITY", err)
    }
}

const updateCommunity = async ({params, body}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateCommunityService(id, body);
        const data = response ? response : "Community not found";
        res.send(data);
    } catch (err) {
        handleHttp(res, "ERROR_UPDATE_COMMUNITY", err)
    }
}

const deleteCommunity = async ({params}: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteCommunityService(id);
        const data = response ? response : "Community not found";
        res.send(data);
    } catch (err) {
        handleHttp(res, "ERROR_DELETE_COMMUNITY", err)
    }
}

export { getCommunity, getCommunities, createCommunity, updateCommunity, deleteCommunity }