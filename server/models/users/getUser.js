import { getUserDB } from "../../libs/mongodb/index.js";

export async function getUser(data) {
    const response = getUserDB(data);
    return response;
}
