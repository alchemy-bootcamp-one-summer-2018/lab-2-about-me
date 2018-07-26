/* exported checkGuessAnswer,resetGuessAnswer2 */

// get the elements we need to use
var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');
var submit2 = document.getElementById('submit2');
var reset2 = document.getElementById('reset2');

// track "state" _across_ calls to checkGuessAnswer
var totalGuesses = 0;

function checkGuessAnswer(event) {
    event.preventDefault();
    var guess = guessForm.elements.show.value;
    console.log(guess);
    var guessesLeft = 5;

    if(guess === 'All of the above') {
        document.getElementById('guess-results').classList.add('correct');
        guessResults.innerText = 'You won!';
        reset2.disabled = false;
        submit2.disabled = true;
    }
    else {
        totalGuesses = totalGuesses + 1;
        guessesLeft = 5 - totalGuesses;
        console.log(totalGuesses);
        if(guessesLeft !== 0){
            guessResults.innerText = `Wrong: ${totalGuesses} bad guesses. ${guessesLeft} guesses left. Hint: she REALLY likes reality TV.`;
        }
        else {
            document.getElementById('guess-results').classList.add('wrong');
            guessResults.innerHTML = 'You lose!';
            guessesLeft = 5;
            totalGuesses = 0;
            reset2.disabled = false;
            submit2.disabled = true;
        }
    }
}

function resetGuessAnswer2() {
    guessResults.innerText = '';
    submit2.disabled = false;
    reset2.disabled = true;
    document.getElementById('guess-results').classList.remove('wrong');
    document.getElementById('guess-results').classList.remove('correct');
}