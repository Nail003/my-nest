import { mongodbSetup, userCollection } from "./index.js";

export async function getUserAvatarDB(data) {
    const { userNameAvatar } = data;

    const response = await mongodbSetup(async (mongoClient, dataBase) => {
        const result = await mongoClient
            .db(dataBase)
            .collection(userCollection)
            .findOne({ userName: userNameAvatar });

        return { avatar: result?.avatar, ok: true };
    });

    return response;
}
