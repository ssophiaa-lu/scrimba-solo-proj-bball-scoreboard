let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function add1home() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function add2home() {
    homeScore += 2
    homeScoreEl.innerText = homeScore

}

function add3home() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

function add1guest() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function add2guest() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function add3guest() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
}

function clearBoard() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.innerText = homeScore
    guestScoreEl.innerText = guestScore
}


window.add1home = add1home
window.add2home = add2home
window.add3home = add3home
window.add1guest = add1guest
window.add2guest = add2guest
window.add3guest = add3guest
window.clearBoard = clearBoard