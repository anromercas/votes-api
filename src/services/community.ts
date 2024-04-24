import { Community } from "../interfaces/community.interface"
import CommunityModel from "../models/community"

const insertCommunityService = async (community: Community) => {
    const response = await CommunityModel.create(community);
    return response;
}

const getCommunitiesService = async () => {
    const response = await CommunityModel.find();
    return response;
}

const getCommunityService = async (id: string) => {
    const response = await CommunityModel.findOne({_id: id});
    return response;
}

const updateCommunityService = async (id: string, community: Community) => {
    const response = await CommunityModel.findOneAndUpdate({_id: id}, community, {new: true});
    return response;
}

const deleteCommunityService = async (id: string) => {
    const response = await CommunityModel.deleteOne({_id: id});
    return response;
}

export { insertCommunityService, getCommunitiesService, getCommunityService, updateCommunityService, deleteCommunityService }