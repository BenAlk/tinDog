class Profile {
    constructor(data) {
        Object.assign(this, data)
    }

    dislikeProfile() {
        document.getElementById('profile').innerHTML += `<img class='badge' src="images/badge-nope.png">`
    }

    likeProfile() {
        document.getElementById('profile').innerHTML += `<img class='badge' src="images/badge-like.png">`
    }

    getProfileHtml() {
        const { name, avatar, age, bio } = this
        
        return `
        <div class="profile" id="profile" style="background: url(${avatar}) center/cover no-repeat;">
            <h2 class="name">${name}, ${age}</h2>
            <p>${bio}</p>
        </div>`
    }
}

export default Profile