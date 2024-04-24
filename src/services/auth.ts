import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UserModel.findOne({ email });
    if(checkIs)  return 'ALREADY_USER';

    //encrypt password
    const passwordHash = await encrypt(password);

    const registerNewUser = UserModel.create({ email, password: passwordHash, name });

    return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if(!checkIs)  return 'NOT_FOUND_USER';

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return 'WRONG_CREDENTIALS';

    const token = await generateToken(checkIs.email);

    return {user: checkIs, token}; 
};

export { registerNewUser, loginUser }