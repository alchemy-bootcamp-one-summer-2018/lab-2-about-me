/* exported checkRiddleAnswers */


var guessForm = document.getElementById('guess-form');
var totalGuesses = 0

function checkRiddleAnswer() {
    var guess = guessForm.customElements.number.value;

    if (guess === 7) {
        // let them know that they won
    }
    else {
        guessResults.innerText = 'Wrong';
        totalGuesses += 1
        console.log(totalGuesses)
    }



}
