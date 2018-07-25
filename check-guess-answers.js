/* exported checkGuessAnswer */

var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');

var totalGuesses = 0;

function checkGuessAnswer() {
    var guess = guessForm.elements.number.value;
    /*eslint-disable */
    if(guess == 30) {
    /*eslint-enable */
        guessResults.innerText = 'You Know Me So Well!';
    }
    else {
        guessResults.innerText = 'Study Harder Next Time!';
        totalGuesses = totalGuesses + 1;
        console.log(totalGuesses);
    }
    return false;
}