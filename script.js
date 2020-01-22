var playButton = document.querySelector("#start");
var secondsDisplay = document.querySelector("#timer");
var qtitle = document.querySelector("#qtitle");
var choices = document.querySelectorAll('.list-group-item')

var answerButton = document.querySelector("#q-list-tab");

var answerChoice0 = document.querySelector('[href="#list-Answer0"]');
var answerChoice1 = document.querySelector('[href="#list-Answer1"]');
var answerChoice2 = document.querySelector('[href="#list-Answer2"]');
var answerChoice3 = document.querySelector('[href="#list-Answer3"]');

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
qtitle.textContent = allquestions[n].title;

for (i=0; i<choices.length; i++) {
   choices[i].textContent=allquestions[n].choices[i]
}

}


//Result

function showResult(){
 alert('this is working')
}


function submitAnswer() {
   
    // find out if click was correct
    // find out if they were right?
if 
    
    (choices[i]=this.allquestions[n].answer){
    alert('correct')
    } else{
        alert('wrong')
    }

    // -- compare which one they clicked with which the index of the correct one from choices
    // -- -- alert good job
    // -- -- else alert get a job
    // is this the last quesion 
    // display final reslut
    
    // call getQuestions with new question
}
playButton.addEventListener("click", startTimer);
//answerButton.addEventListener("click", showResult);
// loop thru choices
for (let i = 0; i < choices.length; i++) {
    // add an event listener to each choice
    choices[i].addEventListener('click', submitAnswer)
    
}

answerChoice0.addEventListener("click", submitAnswer);
answerChoice1.addEventListener("click", submitAnswer);
answerChoice2.addEventListener("click", submitAnswer);
answerChoice3.addEventListener("click", submitAnswer);