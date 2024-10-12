import { getUserAvatarDB } from "../../libs/mongodb/index.js";

export async function getUserAvatarController(data) {
    const response = getUserAvatarDB(data);
    return response;
}
