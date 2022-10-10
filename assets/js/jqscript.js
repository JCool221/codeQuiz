var displayEl = $('#display');
var secondsLeft = 10;
var timerEl = $('#timer');
var buttonBox = $('#buttons');
var highScores = $('#highScores');
var boxH1 = $('#boxH1');
// var selection = ('');
boxH1.attr('data-test', 'test data');

// create start button
var startButton= $('<button>');
startButton.addClass('start-btn');
startButton.text('start');
buttonBox.append(startButton);




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
function addScore () {
    startButton.remove();
    boxH1.text('Enter your initials');
    displayEl.text('');
    var initialsBox = $('<input>');
    displayEl.append(initialsBox);
    var scoreButton = $('<button>');
    scoreButton.addClass('score-button');
    scoreButton.text('Add your Score');
    buttonBox.append(scoreButton);
}

function addNewScore() {
    $(buttonBox).children().remove();
    console.log('This does not do anything yet');
}

// check for correctness
function correct () {
    
}

// create questions
// question one
function questionOne () {
    boxH1.text('Question 1');
    displayEl.text('What does HTML stand for')
    var answers = [
        'A Hyper Text Markup Language',
        'B Hot Mail',
        'C How to Make Lasagna',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass(answers[i]);
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
    
    
    // empty the buttonBox and create the question
function RenderQuestions() {
    $(buttonBox).children().remove();
    questionOne();
}


// timer is at zero
function timesUp() {
    displayEl.text('Try again?');
    var resetBtn = $('<button>');
    resetBtn.addClass('reset-button');
    resetBtn.text('reset');
    buttonBox.append(resetBtn);
}
// write something to the text display box
displayEl.text('Try to answer the following code related questions withihn the time limit. keep in mind that incorrect answers will penalize your scoretime by ten seconds!');

// event handler for start button
startButton.on('click', RenderQuestions);

// event handler for view high scores
highScores.on('click', addScore);

// delegate event listener to the buttonbox
buttonBox.on("click", '.reset-button', refresh);
buttonBox.on('click', '.score-button', addNewScore);
buttonBox.on("click", '.answer-button', correct);

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
    boxH1.text('question');
    displayEl.text('testing');
    startButton.remove();
}