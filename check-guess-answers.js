/* exported checkGuessAnswer */

// get the elements we need to use
var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');
var guessButton = document.getElementById('guess-button');

// track "state" _across_ calls to checkGuessAnswer
var totalGuesses = 0;

function checkGuessAnswer() {
    var guess = guessForm.elements.number.value;
    // eslint-disable-next-line
    if(guess == 7) {
        guessResults.classList.remove(guessResults.classList.item(0));
        guessResults.innerText = 'That\'s right! You win!';
        guessResults.classList.add('correctAnswer');
        totalGuesses = totalGuesses + 1;
        console.log(totalGuesses);
    }
    else {
        guessResults.classList.remove(guessResults.classList.item(0));
        guessResults.innerText = 'Wrong';
        guessResults.classList.add('wrongAnswer');
        totalGuesses = totalGuesses + 1;
        console.log(totalGuesses);
    }

    if(totalGuesses > 4) {
        guessButton.disabled = true;
        guessResults.innerText = 'You have exceeded the maximum number of guesses... you lose.';
    }
    /*else {
        while(guessResults.classList.length > 0) {
            guessResults.classList.remove(guessResults.classList.item(0));
        }
        guessResults.innerText = 'Wrong';
        guessResults.classList.add('wrongAnswer');
        if(totalGuesses =)
        // now we can increment and hold onto the value across
        // calls to this function (this function only increases
        // the value, it doesn't initialize the value)
        totalGuesses = totalGuesses + 1; */
    console.log(totalGuesses);

    return false;
}