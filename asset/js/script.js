var navScore = document.getElementById('navScore')
var navBar = document.getElementById('navBar')
var timer = document.getElementById('timer')
var startButton = document.getElementById('startButton')
var startPage = document.getElementById('startPage')
var q1 = document.getElementById('q-1')
var q2 = document.getElementById('q-2')
var q3 = document.getElementById('q-3')
var q4 = document.getElementById('q-4')
var q5 = document.getElementById('q-5')
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
    // hide startPage by changing the display style to 'none'
    startPage.setAttribute('style', 'display:none');
    // show question #1 by changing the display style to 'block'
    q1.setAttribute('style', 'display:block');
    // set total time count
    timerCount = 100;
    startTimer();
    // clear the names entered in the <textarea></textarea> in HTML.
    playerName.value = "";
})

// create a 'click' event allow to click target answers
q1.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('li')) {
        var answer = element.getAttribute('value')
        if (answer === "correct") {
            this.setAttribute('style', 'display:none');
            q2.setAttribute('style', 'display:block');
            // send feedback 'correct!'
            feedbackEl.textContent = 'Correct !';
        } else {
            this.setAttribute('style', 'display:none');
            q2.setAttribute('style', 'display:block');
            // send feedback of wrong answer and reduce 20s from the timer
            feedbackEl.textContent = 'Wrong, You lost 20s !';
            timerCount = timerCount - 20;
        }
        feedbackEl.setAttribute('class', 'feedback');
        // set a timer to show the answer feedback only for 1 second
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
            q4.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Correct !';
        } else {
            this.setAttribute('style', 'display:none');
            q4.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Wrong, You lost 20s !';
            timerCount = timerCount - 20;
        }

        feedbackEl.setAttribute('class', 'feedback');
        setTimeout(function () {
            feedbackEl.setAttribute('class', 'feedback hide');
        }, 1000);
    }
})

q4.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('li')) {
        var answer = element.getAttribute('value')
        if (answer === "correct") {
            this.setAttribute('style', 'display:none');
            q5.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Correct !';
        } else {
            this.setAttribute('style', 'display:none');
            q5.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Wrong, You lost 20s !';
            timerCount = timerCount - 20;
        }

        feedbackEl.setAttribute('class', 'feedback');
        setTimeout(function () {
            feedbackEl.setAttribute('class', 'feedback hide');
        }, 1000);
    }
})


q5.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('li')) {
        var answer = element.getAttribute('value')
        if (answer === "correct") {
            this.setAttribute('style', 'display:none');
            // direct to recordScore page
            recordScore.setAttribute('style', 'display:block');
            feedbackEl.textContent = 'Correct !';
        } else {
            this.setAttribute('style', 'display:none');
            // direct to recordScore page
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
    clear.setAttribute('style', '');
    timeLeft.textContent = "100";
})

// set a lick event to allow navigating to scoreBoard page
navScore.addEventListener('click', function (event) {
    var element = event.target;
    if (element.matches('li')) {
        startPage.setAttribute('style', 'display:none');
        recordScore.setAttribute('style', 'display:none');
        scoreBoard.setAttribute('style', 'display:block');
    };
})



function saveScore() {
    // set object 'playerInfo' with two inputs: playerName and score
    var playerInfo = playerName.value.trim() + ' - ' + timerCount;
    // push 'playerInfo' into array 'playerScoreSum'.
    playerScoreSum.push(playerInfo);
    localStorage.setItem("playerScoreSum", JSON.stringify(playerScoreSum));
}

function renderScore() {
    // convert stored playScoreSum data in to an object 
    var playerScoreSum = JSON.parse(localStorage.getItem("playerScoreSum"));
    playerScoreEl.innerHTML = "";

    // Render a new li elements for each playerInfo
    for (var i = 0; i < playerScoreSum.length; i++) {

        var li = document.createElement("li");
        li.textContent = playerScoreSum[i];
        li.setAttribute("data-index", i);
        playerScoreEl.appendChild(li);
    };

}

clear.addEventListener('click', function () {
    // clear all local storage data
    localStorage.clear();
    // clear total score on the board
    playerScoreSum = [];
    playerScoreEl.innerHTML = "";
    // hide clear button after clearing
    clear.setAttribute('style', 'display:none');
}
)

function startTimer() {

    timer = setInterval(function () {
        timerCount--;
        timeLeft.textContent = timerCount;

        if (timerCount === 0) {
            score = 0;
            clearInterval(timer);
            // hide all question pages and show the recordScore page
            q1.setAttribute('style', 'display:none');
            q2.setAttribute('style', 'display:none');
            q3.setAttribute('style', 'display:none');
            q4.setAttribute('style', 'display:none');
            q5.setAttribute('style', 'display:none');
            recordScore.setAttribute('style', 'display:block');
        };

    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    return timerCount;
}






