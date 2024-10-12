import {
    messageUserDoesNotExist,
    messageWrongPassword,
} from "../../responseMessages/responseMessages.js";
import { createAccessToken } from "../jwt/index.js";
import {
    doesUserExistsDB,
    isPasswordCorrectDB,
    userCollection,
} from "./index.js";
import { mongodbSetup } from "./mongodbSetup.js";

export async function getUserDB(data) {
    const { userName, password } = data;

    const response = mongodbSetup(async (mongoClient, dataBase) => {
        const commonData = [mongoClient, dataBase, userCollection];

        if (!(await doesUserExistsDB(...commonData, userName))) {
            return messageUserDoesNotExist;
        }

        if (await isPasswordCorrectDB(...commonData, userName, password)) {
            return { accessToken: createAccessToken({ userName }), ok: true };
        }

        return messageWrongPassword;
    });

    return response;
}
