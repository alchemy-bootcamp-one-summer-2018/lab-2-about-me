/*Exported checkGuessAnswer*/

var guessForm = document.getElementById ("guess-form");
var guessResult = document.getElementById ("guess-result");


var totalGuesses = 0;



function checkGuessAnswer() {

    var guess = guessForm.elements.otter.value;
        if (guess == 'otter') {
        guessResult.innerText = 'That\'s right! An ' + guess + ' is my favorite!';
        console.log ('this is what user guessed', guess)
        }

    else {

        totalGuesses = totalGuesses + 1;
        console.log (totalGuesses)
        guessResult.innerText = 'Womp Womp... a ' + guess + 
        ' is not my favorite. You\'re closer though. You\'ve guessed ' + 
        totalGuesses + ' times try again!'
    }

    
    
    return false;

}