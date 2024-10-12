import { mongodbSetup } from "./index.js";

export async function getMessagesDB(data) {
    const { chatName, limit } = data;

    const response = await mongodbSetup(async (mongoClient, dataBase) => {
        const result = await mongoClient
            .db(dataBase)
            .collection(chatName)
            .find()
            .sort({ _id: -1 })
            .limit(limit)
            .toArray();

        return { messages: result };
    });
    response.ok = true;
    return response;
}
