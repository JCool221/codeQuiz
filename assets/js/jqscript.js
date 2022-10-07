var displayEl = $('#display');
var startButton = $('#start-btn');
var secondsLeft = 10;
var timerEl = $('#timer');
var buttonBox = $('#buttons')
// add timer
function countdown () {
    var timerInterval= setInterval(function() {
        secondsLeft--;
        timerEl.text("Timer: " + secondsLeft);
        
        if(secondsLeft === 0 ) {
            clearInterval(timerInterval);
            timesUp();
        }
    }, 1000);
}
// store and recover high scores
// create questions

// timer is at zero
function timesUp() {
    displayEl.text('Try again?');
    var resetBtn = $('<button>');
    resetBtn.addClass('reset-button btn btn-info');
    resetBtn.text('reset');
    buttonBox.append(resetBtn);
}
// write something to the text display box
displayEl.text('Try to answer the following code related questions withihn the time limit. keep in mind that incorrect answers will penalize your scoretime by ten seconds!');

// event handler for start button
startButton.on('click', screenTest);

// delegate event listener to the buttonbox
buttonBox.on("click", '.reset-button', refresh);

// reload the page (for reset button)
function refresh () {
    location.reload();
}
// test functions delete before deployment
function testing123() {
    console.log('test');
}
function screenTest() {
    countdown();
    displayEl.text('testing');
    startButton.hide();
}