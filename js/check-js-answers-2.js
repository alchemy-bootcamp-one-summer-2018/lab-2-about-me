/* exported checkGuessAnswer,resetGuessAnswer2 */

// get the elements we need to use
var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');
var submit2 = document.getElementById('submit2');
var reset2 = document.getElementById('reset2');

// track "state" _across_ calls to checkGuessAnswer
var totalGuesses = 0;

function checkGuessAnswer() {
    var guess = guessForm.elements.show.value;
    var guessesLeft = 5;

    // eslint-disable-next-line
    if(guess == 'All of the above') {
        guessResults.innerText = 'You won!';
        reset2.disabled = false;
        submit2.disabled = true;
    }
    else {
        totalGuesses = totalGuesses + 1;
        guessesLeft = 5 - totalGuesses;
        console.log(totalGuesses);
        if(guessesLeft !== 0){
            guessResults.innerText = 'Wrong: ' + String(totalGuesses) + ' bad guesses. ' + String(guessesLeft) + ' guesses left.';
        }
        else {
            guessResults.innerText = 'You lose!';
            guessesLeft = 5;
            totalGuesses = 0;
            reset2.disabled = false;
            submit2.disabled = true;
        }
    }
    return false;
}

function resetGuessAnswer2() {
    guessResults.innerText = '';
    submit2.disabled = false;
    reset2.disabled = true;
}