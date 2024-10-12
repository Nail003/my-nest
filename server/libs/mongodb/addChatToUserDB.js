import { getUserDataDB, updateUserDB } from "./index.js";

export async function addChatToUserDB(
    mongoClient,
    dataBase,
    userName,
    chatName
) {
    const user = await getUserDataDB(mongoClient, dataBase, userName);

    if (!user.chats) {
        user.chats = {};
    }

    if (user.chats.hasOwnProperty(chatName)) return;

    user.chats[chatName] = chatName;

    const updatedUser = { chats: user.chats };

    return updateUserDB(mongoClient, dataBase, userName, updatedUser);
}
