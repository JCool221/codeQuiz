var displayEl = $('#display');
var startButton = $('#start-btn')

// write something to the text display box
displayEl.text('Try to answer the following code related questions withihn the time limit. keep in mind that incorrect answers will penalize your scoretime by ten seconds!');

// event handler for start button
startButton.on('click', screenTest);


// test functions delete before deployment
function testing123() {
    console.log('test');
}
function screenTest() {
    displayEl.text('testing');
}