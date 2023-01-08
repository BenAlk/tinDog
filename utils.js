function getProfileArray(data, array) {
    for (const profile in data) {
        array.push(profile)
    }
}

function reloadPageMessage() {
    document.getElementById('dislike-btn').classList.add('hidden')
    document.getElementById('like-btn').classList.add('hidden')
    document.getElementById('profile-container').style.display = "flex"
    return `<H1 class="reload-message"> Thank you for taking part, page reloading. <h1>`
}

export { getProfileArray, reloadPageMessage}