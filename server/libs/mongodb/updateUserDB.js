import { userCollection } from "./index.js";

export async function updateUserDB(
    mongoClient,
    dataBase,
    userName,
    updatedUser
) {
    return mongoClient
        .db(dataBase)
        .collection(userCollection)
        .updateOne({ userName }, { $set: updatedUser });
}
