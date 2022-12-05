var navScore = document.getElementById('navScore')
var navBar = document.getElementById('navBar')
var timer = document.getElementById('timer')
var startButton = document.getElementById('startButton')
var startPage = document.getElementById('startPage')
var q1 = document.getElementById('q-1')
var q2 = document.getElementById('q-2')
var q3 = document.getElementById('q-3')
var recordScore = document.getElementById('recordScore')
var submitButton = document.getElementById('submitButton')
var scoreBoard = document.getElementById('scoreBoard')
var goBack = document.getElementById('goBack')
var clear = document.getElementById('clearScore')
var result = document.createElement('p')
var questionPage = document.querySelector('.questionPage')
var timeLeft = document.getElementById('timeLeft')
var feedbackEl = document.getElementById('feedback')
var playerName = document.getElementById('enterName')

var score
var timer
var timerCount

startButton.addEventListener('click', function () {
    startPage.setAttribute('style', 'display:none');
    q1.setAttribute('style', 'display:block');
    timerCount = 100;
    startTimer();
})

q1.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('li')) {
        var answer = element.getAttribute('value')
        if (answer === "correct") {
            this.setAttribute('style', 'display:none');
            q2.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Correct !';
        } else {
            this.setAttribute('style', 'display:none');
            q2.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Wrong !';
        }

        feedbackEl.setAttribute('class', 'feedback');
        setTimeout(function () {
            feedbackEl.setAttribute('class', 'feedback hide');
        }, 1000);
    }
})

q2.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('li')) {
        var answer = element.getAttribute('value')
        if (answer === "correct") {
            this.setAttribute('style', 'display:none');
            q3.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Correct !';
        } else {
            this.setAttribute('style', 'display:none');
            q3.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Wrong !';
        }

        feedbackEl.setAttribute('class', 'feedback');
        setTimeout(function () {
            feedbackEl.setAttribute('class', 'feedback hide');
        }, 1000);
    }
})

q3.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('li')) {
        var answer = element.getAttribute('value')
        if (answer === "correct") {
            this.setAttribute('style', 'display:none');
            recordScore.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Correct !';
        } else {
            this.setAttribute('style', 'display:none');
            recordScore.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Wrong !';
        }

        feedbackEl.setAttribute('class', 'feedback');
        setTimeout(function () {
            feedbackEl.setAttribute('class', 'feedback hide');
        }, 1000);

    };
    stopTimer();

})

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    saveScore();
    recordScore.setAttribute('style', 'display:none');
    scoreBoard.setAttribute('style', 'display:block');
    renderScore();
    navBar.setAttribute('class', 'navigation hide');
})

goBack.addEventListener('click', function () {
    scoreBoard.setAttribute('style', 'display:none');
    startPage.setAttribute('style', 'display:block');
})


function saveScore() {
    var playerInfo = {
        playerName: playerName.value.trim(),
        score: timerCount
    };
    localStorage.setItem("playerInfo", JSON.stringify(playerInfo));
}

function renderScore() {
    var finalScore = JSON.parse(localStorage.getItem("playerInfo"));
    if (finalScore !== null) {
        document.getElementById("savedName").innerHTML = finalScore.playerName;
        document.getElementById("savedScore").innerHTML = finalScore.score;
        // figured out how to print player name on the score page.
        console.log(finalScore.playerName);
        console.log(finalScore.score);
    } else {
        return;
    };
}


clear.addEventListener('click', function () {
    document.getElementById("savedName").innerHTML = '';
    document.getElementById("savedScore").innerHTML = '';
})


function startTimer() {

    timer = setInterval(function () {
        timerCount--;
        timeLeft.textContent = timerCount;

        if (timerCount === 0) {
            score = timeLeft;
            clearInterval(timer);
        };

        console.log(timerCount);
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    return timerCount;
}

console.log(timerCount)


