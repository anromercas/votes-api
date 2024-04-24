import { sign, verify} from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const generateToken = async (id: string) => {
    const token = await sign({}, JWT_SECRET, {
        expiresIn: '24h'
    });
    return token;
}

const verifyToken = (token: string) => {
    const decoded = verify(token, JWT_SECRET);
    return decoded;
}

export { generateToken, verifyToken };