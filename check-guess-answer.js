// Creating global var for guessCount and setting to zero
var guessCount = 0;

// Getting button elements for enabling/disabling
var guessSubmit = document.getElementById('guess-submit');
var guessReset = document.getElementById('guess-reset');

// Setting initial value of winning number
var winningNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {

    console.log('winningNumber: ', winningNumber)

    var guessingGame = document.getElementById('guessing-game');
    var elements = guessingGame.elements; 
    var guess = elements.guess.value;
    var feedback = document.getElementById('guessFeedback');
    console.log('guess: ', guess);
    console.log('guessCountBefore: ', guessCount);
    guessCount++;
    console.log('guessCountAfter: ', guessCount);
    console.log('feedback: ', feedback);

    if (guess > winningNumber) {
        feedback.innerText = 'The winning number is lower than ' + guess;
    } else if (guess < winningNumber) {
        feedback.innerText = 'The winning number is higher than ' + guess;
    } else if (parseInt(guess) === winningNumber) {
        feedback.innerText = 'You Win!!! ' + guess + ' is right, and you got the answer in only ' + guessCount + ' guesses.';
        // Disable the submit button
        guessSubmit.disabled = true;
        // Enable the reset button
        guessReset.disabled = false;
    }

    if (guessCount > 9) {
        // Disable the submit button
        guessSubmit.disabled = true;
        // Enable the reset button
        guessReset.disabled = false;
    }

    // Prevents browser window from refreshing automatically
    return false;

    
}

// This function will run whenever the user presses the Try Again button
function resetGuess() {
    // resets results and button properties to original settings
    guessCount = 0;
    guessSubmit.disabled = false;
    guessReset.disabled = true;
    winningNumber = Math.floor(Math.random() * 100) + 1;
}