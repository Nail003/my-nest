export async function doesUserExistsDB(mongoClient, dataBase, collection, _id) {
    return mongoClient.db(dataBase).collection(collection).findOne({ _id });
}
