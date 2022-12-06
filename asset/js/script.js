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
var playerScoreEl = document.getElementById('playerScore')

var score
var timer
var timerCount
var playerScoreSum = []
var li


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
            feedbackEl.textContent = 'Wrong, You lost 20s !';
            timerCount = timerCount - 20;
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
            feedbackEl.textContent = 'Wrong, You lost 20s !';
            timerCount = timerCount - 20;
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
            feedbackEl.textContent = 'Wrong, You lost 20s !';
            timerCount = timerCount - 20;
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
    navBar.setAttribute('class', 'navigation');
    timeLeft.textContent = "100";
})


function saveScore() {
    // set object 'playerInfo' with two inputs: playerName and score
    var playerInfo = playerName.value.trim() + ' - ' + timerCount;
    // push 'playerInfo' into array 'playerScoreSum'.
    playerScoreSum.push(playerInfo);
    localStorage.setItem("playerScoreSum", JSON.stringify(playerScoreSum));
}

function renderScore() {

    var playerScoreSum = JSON.parse(localStorage.getItem("playerScoreSum"));
    playerScoreEl.innerHTML = "";

    // Render a new li for each playerInfo
    for (var i = 0; i < playerScoreSum.length; i++) {

        var li = document.createElement("li");
        li.textContent = playerScoreSum[i];
        li.setAttribute("data-index", i);
        playerScoreEl.appendChild(li);
    };
}


clear.addEventListener('click', function () {
    localStorage.clear();
    playerScoreEl.innerHTML = "";
}
)

function startTimer() {

    timer = setInterval(function () {
        timerCount--;
        timeLeft.textContent = timerCount;

        if (timerCount === 0) {
            score = timeLeft;
            clearInterval(timer);
        };

    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    return timerCount;
}






