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