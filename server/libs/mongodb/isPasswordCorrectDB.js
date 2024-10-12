export async function isPasswordCorrectDB(
    mongoClient,
    dataBase,
    collection,
    _id,
    password
) {
    return mongoClient
        .db(dataBase)
        .collection(collection)
        .findOne({ _id, password });
}
