import {Schema, Types, model, Model } from "mongoose";
import { Community } from '../interfaces/community.interface';

const CommunitySchema = new Schema<Community>(
    {
        name: { type: String, required: true, unique: true },
        address: { type: String, required: false },
        description: { type: String, required: false },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const CommunityModel = model<Community>('Community', CommunitySchema);
export default CommunityModel