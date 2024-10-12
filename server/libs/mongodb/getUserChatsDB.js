import { getUserDataDB, mongodbSetup } from "./index.js";

export async function getUsersChatDB(data) {
    const { userName } = data;

    const response = await mongodbSetup(async (mongoClient, dataBase) => {
        const result = { chats: [], ok: true };

        const user = await getUserDataDB(mongoClient, dataBase, userName);

        if (!user.chats) {
            return result;
        }

        result.chats = Object.values(user.chats);

        return result;
    });

    return response;
}
