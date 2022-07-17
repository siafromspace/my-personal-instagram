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
        console.log(photoInput.files[0])
        const reader = new FileReader()
        reader.readAsDataURL(photoInput.files[0])

        reader.addEventListener('load', () => {
            addEntryToDb('gallery', reader.result)
            getEntryFromDb('gallery')
            // console.log(reader.result)
            const gallerySection = document.querySelector('.gallery')
            const newPhoto = `
            <a href="#" class="item">
                <img src="${reader.result}" alt="">
            </a>`
            gallerySection.insertAdjacentHTML('beforeend', newPhoto)
        })
    })
}

const addImagesToGallery = async () => {
    const gallerySection = document.querySelector('.gallery')
    const galleryData = await getEntryFromDb('gallery')
    const galleryItems = galleryData.map(singlePhoto => {
        return `
            <a href="#" class="item">
                <img src="${singlePhoto}" alt="">
            </a>`
    })
    gallerySection.style.display = 'grid'
    gallerySection.innerHTML = galleryItems.join('')
}

const addProfilePhotoEventListeners = () => {
    const profileInput = document.getElementById('addProfilePhoto')
    profileInput.addEventListener('change', () => {
        const reader = new FileReader()
        reader.readAsDataURL(profileInput.files[0])

        reader.addEventListener('load', () => {
            clearAllEntries('profile')
            addEntryToDb('profile', reader.result)

            const profileImg = document.getElementById('profile-photo-img')
            profileImg.setAttribute('src', `${reader.result}`)
        })
    })
}

export { bioEventListeners, galleryEventListeners, addImagesToGallery, addProfilePhotoEventListeners }