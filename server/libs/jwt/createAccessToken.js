import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

export function createAccessToken(data) {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
}
