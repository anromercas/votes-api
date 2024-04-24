import {Schema, Types, model, Model } from "mongoose";
import { Community } from '../interfaces/community.interface';
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        description: { type: String, required: false },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const UserModel = model<User>('users', UserSchema);
export default UserModel