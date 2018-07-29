/* exported checkGuessAnswer */

var guessForm = document.getElementById ('guess-form');
var guessResult = document.getElementById ('guess-result');

var totalGuesses = 0;
var lives = 5;

function checkGuessAnswer(){

    var guess = guessForm.elements.otter.value;

    if(guess === 'otter') {
        guessResult.innerText = 'That\'s right! An ' + guess + ' is my favorite!';
        console.log ('this is what user guessed', guess);
    }
    else {

        totalGuesses = totalGuesses + 1;
        console.log (totalGuesses);
        lives--;
        guessResult.innerText = 'Whomp Whomp... a ' + guess +
        ' is not my favorite. You\'re closer though. You have ' + lives + ' more tries!';
    }

    return false;

}