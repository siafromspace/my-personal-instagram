const gallery = () => {
return `
<input type="file" name="photo" id="addPhotoInput">
<label for="addPhotoInput">
    <i class="add-photo fa-solid fa-square-plus"></i>
</label>
<div class="gallery-nav"></div>
<section class="gallery">
    <div class="gallery-loader">
        <img src="../galleryLoader.svg" alt="">
    </div>
</section>`
}

export default gallery