/* exported checkGuessAnswer */

var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');


// var score = 0;
var numberGuesses = 3;
function checkGuessAnswer() {
    var age = guessForm.elements.value;
    if(age === '34') {
        guessResults.innerText = 'you are right';
    }
    else {
        guessResults.innerText = 'wrong';
        numberGuesses = numberGuesses --;
        console.log('results');
    }
    return false;
}

