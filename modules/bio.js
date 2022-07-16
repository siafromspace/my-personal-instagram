const bio = () => {
    return `
    <section class="bio">
        <div class="profile-photo">
            <img src="https://images.pexels.com/photos/1727280/pexels-photo-1727280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="profile-photo">
        </div>
        <div class="profile-info">
            <p class="name">siafromspace</p>
            <button>edit bio</button>
        </div>
        <form class="edit-bio">
            <input type="text" name="name" id="name" placeholder="name">
            <input type="submit">
        </form>
    </section>`
}
export default bio