var playButton = document.querySelector("#start");
var secondsDisplay = document.querySelector("#timer");
var qtitle = document.querySelector("h4");
var choices = document.querySelectorAll('.list-group-item')

var answerButton = document.querySelector("#q-list-tab");


var totalSeconds = 5;
var secondsElapsed = 0;
var interval;
var questioncount;

//Timer
function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed);
    console.log(secondsLeft);

    var formattedSeconds;


    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }
    console.log(formattedSeconds);

    return formattedSeconds;
}

function renderTime() {

    secondsDisplay.textContent = getFormattedSeconds();

    if (secondsElapsed >= totalSeconds) {

        stopTimer();
    }
}

function startTimer() {
    console.log('hello');
    getQuestions(0);
  
    interval = setInterval(function () {
        secondsElapsed++;
        renderTime();
    }, 1000);
}


function stopTimer() {
    secondsElapsed = 0;
    renderTime();
    clearInterval(interval);

}

//Questions

function getQuestions(n) {
qtitle.textContent = allquestions[n]['title'];

for (i=0; i<choices.length; i++) {
   choices[i].textContent=allquestions[n]['choices'][i]
}

}


//Result
function showResult(){
 
}

// function setTimePreferences() {
//     localStorage.setItem(
//         "preferences",
//         JSON.stringify({
//             workMinutes: workMinutesInput.value.trim(),
//             restMinutes: restMinutesInput.value.trim()
//         })
//     );

// }

playButton.addEventListener("click", startTimer);
answerButton.addEventListener("click", showResult);
// stopButton.addEventListener("click", stopTimer);
// statusToggle.addEventListener("change", toggleStatus);
