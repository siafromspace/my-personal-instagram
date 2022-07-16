import { getEntryFromDb } from "../database.js"

const bio = async () => {
    const userInfo = await getEntryFromDb('bio')
    return `
<section class="bio">
    <div class="profile-photo">
        <img src="https://images.pexels.com/photos/1727280/pexels-photo-1727280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="profile-photo">
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