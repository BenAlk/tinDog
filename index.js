import  dogs  from "./data.js"
import  Profile from "./Dog.js"
import { getProfileArray, reloadPageMessage } from "./utils.js"

let isWaiting = false

let profileArray = []
getProfileArray(dogs, profileArray)

function getProfile() {
    const nextProfile = dogs[profileArray.shift()]
    return new Profile(nextProfile)
}

function dislikeOption() {
    if (!isWaiting) {
        tinDog.dislikeProfile()
        tinDog.hasBeenSwiped = true
        if (tinDog.hasBeenSwiped) {
            isWaiting = true
            if (profileArray.length > 0) {
                setTimeout(() => {
                    tinDog = getProfile()
                    render()
                    isWaiting = false
                }, 2000);
            }
            else {
                setTimeout(() => {
                    resetTindog()
                }, 2000)
            }
        }
    }
}

function likeOption() {
    if (!isWaiting) {
        tinDog.likeProfile()
        tinDog.hasBeenSwiped = true
        tinDog.hasBeenLiked = true
        if (tinDog.hasBeenSwiped && tinDog.hasBeenLiked) {
            isWaiting = true
            if (profileArray.length > 0) {
                setTimeout(() => {
                    tinDog = getProfile()
                    render()
                    isWaiting = false
                }, 2000);
            }
            else {
                setTimeout(() => {
                    resetTindog()
                }, 2000)
            }
        }
    }
}

function resetTindog() {
    isWaiting = true
    document.getElementById('profile-container').innerHTML = reloadPageMessage()
    setTimeout(() => {
        window.location.reload()
        isWaiting = false
    }, 5000) 
}

function render() {
    document.getElementById('profile-container').innerHTML = tinDog.getProfileHtml()
}

document.getElementById('dislike-btn').addEventListener('click', dislikeOption)
document.getElementById('like-btn').addEventListener('click', likeOption)

let tinDog = getProfile()
render()