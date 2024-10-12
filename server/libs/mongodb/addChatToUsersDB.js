import { addChatToUserDB } from "./index.js";

export async function addChatToUsersDB(mongoClient, dataBase, chatName) {
    const [firstUser, secondUser] = chatName.split(" ");
    await addChatToUserDB(mongoClient, dataBase, firstUser, chatName);
    await addChatToUserDB(mongoClient, dataBase, secondUser, chatName);
}
