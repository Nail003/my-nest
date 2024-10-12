import { MongoClient } from "mongodb";
import env from "dotenv";

const uri = process.env.MONGO_CREDENTIALS;
const dataBase = "mynest";

export async function mongodbSetup(callback) {
    const mongoClient = new MongoClient(uri);

    await mongoClient.connect();
    const response = await callback(mongoClient, dataBase);
    await mongoClient.close();
    return response;
}
