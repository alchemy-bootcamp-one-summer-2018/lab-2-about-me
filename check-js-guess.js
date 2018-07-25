/*Exported checkGuessAnswer*/

var guessForm = document.getElementById ("guess-form");
var guessResult = document.getElementById ("guess-result");

var totalGuess = 0;

function checkGuessAnswer() {

    var guess = guessForm.elements.otter.value;
        if (guess == 'otter') {
        guessResult.innerText = 'yay!!';
    
     }

    else {
        guessResult.innerText = 'Wrong';

        totalGuesses = totalGuesses + 1;
        console.log (totalGuesses)
    }

    return false;

}