import { storeMessageDB } from "../../libs/mongodb/index.js";

export async function postMessageController(data) {
    const response = await storeMessageDB(data);
    return response;
}
