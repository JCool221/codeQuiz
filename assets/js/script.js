var displayEl = document.querySelector('#display');
var startButton = document.querySelector('#start-btn');
var secondsLeft = 10;
var timerEl = document.querySelector('#timer');
// add timer
function countdown () {
    var timerInterval= setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "timer: " + secondsLeft;

        if(secondsLeft === 0 ) {
            clearInterval(timerInterval);
            testing123();
        }
    }, 1000);
}
// store and recover high scores
// create questions


// write something to the text display box
displayEl.textContent = 'Try to answer the following code related questions withihn the time limit. keep in mind that incorrect answers will penalize your scoretime by ten seconds!';

// event handler for start button
startButton.addEventListener('click', screenTest);


// test functions delete before deployment
function testing123() {
    console.log('test');
}
function screenTest() {
    countdown();
    displayEl.textContent = 'testing';
}