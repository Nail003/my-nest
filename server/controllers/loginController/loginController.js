import { getUser } from "../../models/users/index.js";

export async function loginController(data) {
    const response = await getUser(data);
    return response;
}
