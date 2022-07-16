import bio from './modules/bio.js'
import gallery from './modules/gallery.js'
import nav from './modules/nav.js'
import { request, addEntryToDb, getEntryFromDb } from './database.js'
import { bioEventListeners, galleryEventListeners } from './events.js'

const app = async () => {
    return `
    ${nav()}
    <div class="container">
        ${await bio()}
        ${gallery()}
    </div>
    `
}

request.onsuccess = async () => {
    document.getElementById('root').innerHTML = await app()
    bioEventListeners()
    galleryEventListeners()
    // getEntryFromDb('bio')
}
