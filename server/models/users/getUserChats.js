import { getUsersChatDB } from "../../libs/mongodb/index.js";

export async function getUserChats(data) {
    return getUsersChatDB(data);
}
