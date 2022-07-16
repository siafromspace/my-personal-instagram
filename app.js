import bio from './modules/bio.js'
import gallery from './modules/gallery.js'
import nav from './modules/nav.js'
import { request } from './database.js'

const app = () => {
    return `
    ${nav()}
    <div class="container">
        ${bio()}
        ${gallery()}
    </div>
    `
}
document.getElementById('root').innerHTML = app()

const editBioForm = document.querySelector('.edit-bio')

editBioForm.addEventListener('submit', () => {
    event.preventDefault()
    const nameInput = document.getElementById('name').value
    const nameOutput = document.querySelector('.name')
    nameOutput.textContent = nameInput
})
