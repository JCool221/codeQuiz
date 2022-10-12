var displayEl = $('#display');
var secondsLeft = 10;
var timerEl = $('#timer');
var buttonBox = $('#buttons');
var highScores = $('#highScores');
var boxH1 = $('#boxH1');
var scoreLog =[];
var storedScore = localStorage.getItem('score');

// add attributes to h1
boxH1.attr('data-test', 'test data');

// create start button
var startButton= $('<button>');
startButton.addClass('start-btn');
startButton.text('start');
buttonBox.append(startButton);

// write something to the text display box
displayEl.text('Try to answer the following code related questions withihn the time limit. keep in mind that incorrect answers will penalize your scoretime by ten seconds!');

// event handler for start button
startButton.on('click', RenderQuestions);

// event handler for view high scores
highScores.on('click', scoreBoardShow);

// draw the scoreboard
function scoreBoardShow () {
    displayEl.text('');
    boxH1.text('High Scores');
    var scoreBoard = $('<ol>');
    scoreBoard.addClass('score-Board');
    var storedScore = localStorage.getItem('score');
    var scoreBoardText = JSON.parse(storedScore);
    scoreBoard.text(storedScore);
    displayEl.append(scoreBoard);

};



// divs to store answer trys
var keyTest = $('<div>');
keyTest.addClass('keyTest');
var answerKey = $('<div>');
answerKey.addClass('answerKey');
var score = 0

// correct answer function
function correct () {
    console.log('correct');
    score++;
    console.log(score);
}
// incorrect answer function
function incorrect () {
    console.log('incorrect');
    secondsLeft -= 1;
    console.log(score);
}

// add timer
function countdown () {
    var timerInterval= setInterval(function() {
        secondsLeft--;
        timerEl.text("Timer: " + secondsLeft);
        if(secondsLeft <= 0 ) {
            clearInterval(timerInterval);
            secondsLeft = 0;
            $(buttonBox).children().remove();
            addScore();
        }
    }, 1000);
}

// store and recover high scores
function addScore () {
    startButton.remove();
    boxH1.text('Your score is ' + score);
    displayEl.text('Enter your initials');
    var initialsBox = $('<input>');
    initialsBox.addClass('initials-box')
    displayEl.append(initialsBox);
    var scoreButton = $('<button>');
    scoreButton.addClass('score-button');
    scoreButton.text('Add your Score');
    buttonBox.append(scoreButton);
    buttonBox.on("click", '.score-button', function () {
        var initials = document.getElementsByClassName("initials-box")[0].value;
        var newScore = (score + " " + initials);
        var scoreString = JSON.stringify(newScore);
        scoreLog.push(scoreString);
        localStorage.setItem('score', scoreLog);
        console.log(scoreLog);
    })
}


// create questions
// question one
function questionOne () {
    $(buttonBox).children().remove();
    boxH1.text('Question 1');
    displayEl.text('What does HTML stand for')
    answerKey.text('A Hyper Text Markup Language');
    var answers = [
        'A Hyper Text Markup Language',
        'B Hot Mail',
        'C How to Make Lasagna',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
};

// check for correctness
buttonBox.on("click", '.answer-button', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
    if (keyTest.text() === answerKey.text()) {
    correct();
    questionTwo();
   } else {
    incorrect();
    questionTwo();
   }
});


// question two
function questionTwo () {
    $(buttonBox).children().remove();
    boxH1.text('Question 2');
    displayEl.text('How many tags are in a regular element?')
    answerKey.text('A 2');
    var answers = [
        'A 2',
        'B 1',
        'C 3',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button2');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
// check for correctness
buttonBox.on("click", '.answer-button2', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
   if (keyTest.text() === answerKey.text()) {
    correct();
    questionThree();
   } else {
    incorrect();
    questionThree();
   }
});

// question three
function questionThree () {
    $(buttonBox).children().remove();
    boxH1.text('Question 3');
    displayEl.text('What is the differnece between an opening tagand a closing tag??')
    answerKey.text('B Closing tag has a / in front');
    var answers = [
        'A Opening tag has a / in front',
        'B Closing tag has a / in front',
        'C There is no difference',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button3');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
// check for correctness
buttonBox.on("click", '.answer-button3', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
   if (keyTest.text() === answerKey.text()) {
    correct();
    questionFour();
   } else {
    incorrect();
    questionFour();
   }
});

// question four
function questionFour () {
    $(buttonBox).children().remove();
    boxH1.text('Question 4');
    displayEl.text('<body> Is this an opening or a closing tag?')
    answerKey.text('C Opening');
    var answers = [
        'A That is not a valid tag',
        'B Closing',
        'C Opening',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button4');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
// check for correctness
buttonBox.on("click", '.answer-button4', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
   if (keyTest.text() === answerKey.text()) {
    correct();
    questionFive();
   } else {
    incorrect();
    questionFive();
   }
});
// question five
function questionFive () {
    $(buttonBox).children().remove();
    boxH1.text('Question 5');
    displayEl.text('Where is the meta tag only found?')
    answerKey.text('B The Home page');
    var answers = [
        'A The last page',
        'B The Home page',
        'C The second page',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button5');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
// check for correctness
buttonBox.on("click", '.answer-button5', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
   if (keyTest.text() === answerKey.text()) {
    correct();
    questionSix();
   } else {
    incorrect();
    questionSix();
   }
});

// question six
function questionSix () {
    $(buttonBox).children().remove();
    boxH1.text('Question 6');
    displayEl.text('What is an element that does not have a closing tag called?')
    answerKey.text('A Empty Element');
    var answers = [
        'A Empty Element',
        'B Tagged Element',
        'C Closed ELement',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button6');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
// check for correctness
buttonBox.on("click", '.answer-button6', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
   if (keyTest.text() === answerKey.text()) {
    correct();
    questionSeven();
   } else {
    incorrect();
    questionSeven();
   }
});

// question seven
function questionSeven () {
    $(buttonBox).children().remove();
    boxH1.text('Question 7');
    displayEl.text('What should values always be enclosed in?')
    answerKey.text('C Quotation marks');
    var answers = [
        'A Commas',
        'B Parenthesis',
        'C Quotation marks',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button7');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
// check for correctness
buttonBox.on("click", '.answer-button7', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
   if (keyTest.text() === answerKey.text()) {
    correct();
    questionEight();
   } else {
    incorrect();
    questionEight();
   }
});

// question eight
function questionEight () {
    $(buttonBox).children().remove();
    boxH1.text('Question 8');
    displayEl.text('what is an example of an empty element?')
    answerKey.text('B <img>');
    var answers = [
        'A <a>',
        'B <img>',
        'C <div>',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button8');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
// check for correctness
buttonBox.on("click", '.answer-button8', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
   if (keyTest.text() === answerKey.text()) {
    correct();
    questionNine();
   } else {
    incorrect();
    questionNine();
   }
});

// question nine
function questionNine () {
    $(buttonBox).children().remove();
    boxH1.text('Question ');
    displayEl.text('What is always a welcome page, and explains the purpose or topic of the site?')
    answerKey.text('B Homepage');
    var answers = [
        'A Table of Contents',
        'B Homepage',
        'C ReadMe',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button9');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
// check for correctness
buttonBox.on("click", '.answer-button9', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
   if (keyTest.text() === answerKey.text()) {
    correct();
    questionTen();
   } else {
    incorrect();
    questionTen();
   }
});

// question ten
function questionTen () {
    $(buttonBox).children().remove();
    boxH1.text('Question 10');
    displayEl.text('What does View Source do?')
    answerKey.text('A Brings up a note pad with the HTML code already used for the site');
    var answers = [
        'A Brings up a note pad with the HTML code already used for the site',
        'B Brings up an empty site',
        'C Returns you to the homepage',
    ];     
    for (var i = 0; i < answers.length; i++) {
        var answerButton = $('<button>');
        answerButton.addClass('answer-button10');
        answerButton.attr('data-answer', answers[i]);
        answerButton.text(answers[i]);
        buttonBox.append(answerButton);
    }
}
// check for correctness
buttonBox.on("click", '.answer-button10', function  (event) {
    keyTest.text($(event.target).attr('data-answer'));
   if (keyTest.text() === answerKey.text()) {
    correct();
   } else {
    incorrect();
   }
});

// empty the buttonBox and create the question
function RenderQuestions() {
    $(buttonBox).children().remove();
    questionOne();
    countdown();
}

// delegate event listener to the buttonbox
buttonBox.on("click", '.reset-button', refresh);

// reload the page (for reset button)
function refresh () {
    location.reload();
}
