import { request, addEntryToDb, getEntryFromDb, clearAllEntries } from './database.js'

const bioEventListeners = () => {
    const editBioForm = document.querySelector('.edit-bio')
    const editBioBtn = document.querySelector('.edit-bio-btn')
    const cancelBtn = document.querySelector('.cancel')
    const profile = document.querySelector('.profile')

    editBioBtn.addEventListener('click', () => {
        editBioForm.classList.remove('hide')
        profile.classList.add('hide')
    })

    editBioForm.addEventListener('submit', () => {
        event.preventDefault()
        const nameInput = document.getElementById('name').value
        const descriptionInput = document.getElementById('description').value

        clearAllEntries('bio')
        addEntryToDb('bio', { nameInput, descriptionInput })

        // const userInfo = getEntryFromDb('bio')
        const nameOutput = document.querySelector('.name')
        const descriptionOutput = document.querySelector('.description')

        nameOutput.textContent = nameInput
        descriptionOutput.textContent = descriptionInput

        editBioForm.classList.add('hide')
        profile.classList.remove('hide')
    })

    cancelBtn.addEventListener('click', () => {
        event.preventDefault()
        editBioForm.classList.add('hide')
        profile.classList.remove('hide')
    })
}

const galleryEventListeners = () => {
    const photoInput = document.getElementById('addPhotoInput')
    photoInput.addEventListener('change', () => {
        console.log(photoInput.files)
    })
}

export { bioEventListeners, galleryEventListeners }