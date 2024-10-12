import { messsageStoredInChat } from "../../responseMessages/responseMessages.js";
import { addChatToUsersDB, mongodbSetup } from "./index.js";

const globalChat = "Global Chat";

export async function storeMessageDB(data) {
    const { userName, chatName, message } = data;
    const messageData = { userName, message };

    const response = await mongodbSetup(async (mongoClient, dataBase) => {
        // Store message in correct chat
        await mongoClient
            .db(dataBase)
            .collection(chatName)
            .insertOne(messageData);

        if (chatName === globalChat) return messsageStoredInChat;

        await addChatToUsersDB(mongoClient, dataBase, chatName);

        return messsageStoredInChat;
    });

    return response;
}
