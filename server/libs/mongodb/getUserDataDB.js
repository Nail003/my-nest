import { userCollection } from "./index.js";

export async function getUserDataDB(mongoClient, dataBase, _id) {
    return mongoClient.db(dataBase).collection(userCollection).findOne({ _id });
}
