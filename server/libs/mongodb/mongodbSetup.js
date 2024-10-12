import { MongoClient } from "mongodb";
const uri =
    "mongodb+srv://mynest:qLvHrd8a1fqLTAND@cluster0.pozq30s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dataBase = "mynest";

export async function mongodbSetup(callback) {
    const mongoClient = new MongoClient(uri);

    await mongoClient.connect();
    const response = await callback(mongoClient, dataBase);
    await mongoClient.close();
    return response;
}
