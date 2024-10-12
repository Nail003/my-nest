import { getUserChats } from "../../models/users/index.js";

export async function getUserChatsController(data) {
    return getUserChats(data);
}
