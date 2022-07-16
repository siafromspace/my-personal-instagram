import bio from './modules/bio.js'
import gallery from './modules/gallery.js'
import nav from './modules/nav.js'

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