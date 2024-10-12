import {
    messageUserAlreadyExist,
    messageUserCreatedSuccessfully,
} from "../../responseMessages/responseMessages.js";
import { doesUserExistsDB, mongodbSetup, userCollection } from "./index.js";

export async function createUserDB(data) {
    const response = await mongodbSetup(async (mongoClient, dataBase) => {
        if (
            await doesUserExistsDB(
                mongoClient,
                dataBase,
                userCollection,
                data._id
            )
        )
            return messageUserAlreadyExist;

        await mongoClient
            .db(dataBase)
            .collection(userCollection)
            .insertOne(data);

        return messageUserCreatedSuccessfully;
    });
    return response;
}
