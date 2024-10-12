import { createUserDB } from "../../libs/mongodb/index.js";

export async function createUser(data) {
    data._id = data.userName;
    const response = await createUserDB(data);
    return response;
}
