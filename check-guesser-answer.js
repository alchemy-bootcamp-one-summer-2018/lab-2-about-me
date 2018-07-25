/*export checkGuesserAnswer */

var guessForm = document.getElementById('guess-form');
var guesserResults = document.getElementById('guesser-results');

var numOfGuesses = 0

function checkGuesserAnswer() {
    var guess = guessForm.elements.number.value;

    if(guess == 6) {
        guesserResults.innerText = 'Nailed it!'
    }
    else {
        guesserResults.innerText = 'Nope, try again'
        numOfGuesses = numOfGuesses + 1;
        console.log(numOfGuesses);
        guessForm = '';
    }
return false;
}