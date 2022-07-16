const request = indexedDB.open('instagram', 1)

request.onsuccess = () => {
    console.log('success accessing db')
    addEntryToDb('bio', { name: 'sharon', description: 'hi i love food' })
}

request.onupgradeneeded = () => {
    const database = request.result
    database.createObjectStore('bio', { autoIncrement: true })
    database.createObjectStore('gallery', { autoIncrement: true })
}

request.onerror = () => {
    console.log('error accessing db')
}

const addEntryToDb = (storeName, entry) => {
    const database = request.result
    const transaction = database.transaction([storeName], 'readwrite')
    const store = transaction.objectStore(storeName)
    store.add(entry)
}

export { request }