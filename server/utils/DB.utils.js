async function getManyDocs(collection, query = '', successCb = () => {}, failCb = () => {}) {
    const options = [(error, collectionArray) => {
        if (error) throw new Error(`error on getManyDocs: ${error}`);
        !collectionArray ? failCb() : successCb(collectionArray)
    }]
    if (query) options.unshift(query)
    try {
        await collection.find(...options)
    } catch (error) {
        return { success: false, error: `${error}` }
    } finally {}
}
async function getDoc(collection, query, successCb = () => {}, failCb = () => {}) {

    try {
        await collection.findOne(query, (error, doc) => {
            if (error) throw new Error(`error on getDoc: ${error}`);
            !doc ? failCb() : successCb(doc)
        })
    } catch (error) {
        return { success: false, error: `${error}` };
    } finally {}
}
async function postDocs(collection, docs, successCb = () => {}) {
    try {
        await collection.insertMany(docs, (error) => {
            if (error) throw new Error(`error on postDocs: ${error}`);
            successCb(docs);
        })
    } catch (error) {
        return { success: false, error: `${error}` };
    } finally {}
}
async function updateDoc(collection, doc, successCb = () => {}, failCb = () => {}) {
    const { token, _id } = doc;
    if (!token) throw new Error('token is required on updateDoc');
    try {
        await collection.findOneAndUpdate(_id ? { _id } : { token }, doc, async(error, docFromDb) => {
            if (error) throw new Error(`error on updateDoc: ${error}`);
            !docFromDb ? failCb() : successCb(docFromDb);
        })
    } catch (error) {
        return { success: false, error: `${error}` };
    } finally {}
}
async function deleteDoc(collection, doc, successCb = () => {}, failCb = () => {}) {
    const { token, _id } = doc;
    if (!token) throw new Error('token is required on deleteDoc');
    try {
        await collection.findOneAndRemove(_id ? { _id } : { token }, (error, docFromDb) => {
            if (error) throw new Error(`error on deleteDoc: ${error}`);
            !docFromDb ? failCb() : successCb(docFromDb);
        })
    } catch (error) {
        return { success: false, error: `${error}` };
    } finally {}
}

module.exports = {
    getManyDocs,
    getDoc,
    postDocs,
    updateDoc,
    deleteDoc,
}