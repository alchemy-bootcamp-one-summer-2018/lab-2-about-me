/* exported checkGuessAnswer */

var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');

var totalGuesses = 0;

function checkGuessAnswer() {
    var guess = guessForm.elements.florida.value;
    if(guess == 4) {
        guessResults.innerText = 'Congrats! You got it correct!';
    }
    else {
        guessResults.innerText = 'Wrong';
        totalGuesses = totalGuesses + 1;
        console.log(totalGuesses);
    }

    return false;
}