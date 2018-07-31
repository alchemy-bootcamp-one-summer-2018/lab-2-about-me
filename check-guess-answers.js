/* exported resetGuessAnswers */
/* exported checkGuessAnswer */
// get the elements we need to use
var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');
var guessButton = document.getElementById('guess-button');
var guessReset = document.getElementById('guess-reset');

// track "state" _across_ calls to checkGuessAnswer
var totalGuesses = 5;

function checkGuessAnswer() {
    var guess = guessForm.elements.number.value;

    // eslint-disable-next-line
    if(guess == 7) {
        guessResults.classList.remove(guessResults.classList.item(0));
        guessResults.innerText = 'That\'s right! You win!';
        guessResults.classList.add('correctAnswer');
        totalGuesses--;
        guessButton.disabled = true;
        guessReset.disabled = false;
        console.log(totalGuesses);
    }
    else {
        guessResults.classList.remove(guessResults.classList.item(0));
        totalGuesses--;
        guessResults.innerText = `Wrong... you have ${totalGuesses} guesses left.`;
        guessResults.classList.add('wrongAnswer');
        console.log(totalGuesses);
    }

    if(totalGuesses === 0) {
        guessButton.disabled = true;
        guessReset.disabled = false;
        guessResults.innerText = 'You have exceeded the maximum number of guesses... you lose.';
    }

    return false;
}

function resetGuessAnswers() {
    while(guessResults.classList.length > 0) {
        guessResults.classList.remove(guessResults.classList.item(0));
    }

    guessButton.disabled = false;
    guessReset.disabled = true;
    guessResults.innerText = '';
    totalGuesses = 5;
    guessForm.reset();
    return false;
}
