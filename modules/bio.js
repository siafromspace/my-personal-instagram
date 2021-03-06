import { getEntryFromDb } from "../database.js"

const bio = async () => {
    const userInfo = await getEntryFromDb('bio')
    const profilePhoto = await getEntryFromDb('profile')
    let profileLength = profilePhoto.length
    console.log(profileLength)
    return `
<section class="bio">
    <div class="profile-photo">
        <input type="file" name="photo" id="addProfilePhoto">
        <label for="addProfilePhoto">
            <img src="${profileLength === 0 ? '../profile-default.jpg' : profilePhoto}" alt="profile-photo" id="profile-photo-img">
            <div class="overlay">
                <i class="fa-solid fa-camera"></i>
            </div>
        </label>
    </div>
    <div class="profile-info">
        <div class="profile">
            <p class="name">${userInfo[0] ? userInfo[0].nameInput : ''}</p>
            <p class="description">${userInfo[0] ? userInfo[0].descriptionInput : ''}</p>
            <button class="edit-bio-btn">edit bio</button>
        </div>

        <form class="edit-bio hide">
            <input type="text" name="name" id="name" placeholder="name" required>
            <input type="text" name="description" id="description" placeholder="description" required>
            <div class="btns">
                <input type="submit">
                <button class="cancel">Cancel</button>
            </div>
        </form>
    </div>
</section>`
}
export default bio