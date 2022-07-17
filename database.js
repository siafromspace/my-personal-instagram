const request = indexedDB.open('instagram', 1)

request.onsuccess = () => {
    console.log('success accessing db')
    // addEntryToDb('bio', { name: 'sharon', description: 'hi i love food' })
}

request.onupgradeneeded = () => {
    const database = request.result
    database.createObjectStore('bio', { autoIncrement: true })
    database.createObjectStore('gallery', { autoIncrement: true })
    database.createObjectStore('profile', { autoIncrement: true })
}

request.onerror = () => {
    console.log('error accessing db')
}

const addEntryToDb = (storeName, entry) => {
    const database = request.result
    const transaction = database.transaction([storeName], 'readwrite')
    const store = transaction.objectStore(storeName)
    store.add(entry)

    transaction.oncomplete = () => {
        console.log('success adding entry')
    }
    transaction.onerror = (event) => {
        console.log(`error adding entry to ${storeName}`)
        console.log(event.target.error)
    }
}

const getEntryFromDb = async (storeName, id) => {
    const data = new Promise((resolve, reject) => {
        const database = request.result
        const transaction = database.transaction([storeName])
        const store = transaction.objectStore(storeName)
        const requestData = id ? store.get(id) : store.getAll()

        requestData.onsuccess = () => {
            // console.log('success', requestData.result)
            resolve(requestData.result)
        }
        requestData.onerror = () => {
            console.log('error')
            reject(requestData.error)
        }
    })
    return Promise.resolve(data)
}

const clearAllEntries = (storeName) => {
    const database = request.result
    const transaction = database.transaction([storeName], 'readwrite')
    const store = transaction.objectStore(storeName)
    store.clear()

}

export { request, addEntryToDb, getEntryFromDb, clearAllEntries }