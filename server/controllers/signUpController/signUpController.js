import { createUser } from "../../models/users/index.js";

export async function signUpController(data) {
    const response = await createUser(data);
    return response;
}
