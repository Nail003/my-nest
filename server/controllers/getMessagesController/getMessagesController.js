import { getMessagesDB } from "../../libs/mongodb/index.js";

export async function getMessagesController(data) {
    const response = getMessagesDB(data);
    return response;
}
