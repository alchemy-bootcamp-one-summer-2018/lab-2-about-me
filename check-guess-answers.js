/* exported checkGuessAnswer , setGameOver */

// get the elements we need to use
var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');
var guessSubmit = document.getElementById('guess-submit');
var guessReset = document.getElementById('guess-reset');

// track "state" _across_ calls to checkGuessAnswer
var totalGuesses = 0;

function checkGuessAnswer() {
    var guess = guessForm.elements.number.value;
    
    // eslint-disable-next-line
    if(guess == 4) {
        console.log('correct');
        guessResults.innerText = 'Wow, you\'re so smart you will make an excellent spaceship captain!';
        guessResults.style.backgroundColor = 'green';
        guessResults.style.color = 'white';
        guessSubmit.disabled = true;
        guessReset.disabled = false;
    }
    else if(totalGuesses === 5) {
        console.log('no more guesses');
        guessResults.innerText = 'GAME OVER!, you will never be a glorious spaceship captain!';
        guessResults.style.backgroundColor = 'red';
        guessResults.style.color = 'white';
        guessSubmit.disabled = true;
        guessReset.disabled = false;
    }
    else {
        guessResults.style.backgroundColor = 'red';
        guessResults.style.color = 'white';
        if(guess < 4) {
            console.log('too low');
            guessResults.innerText = 'Last guess was too low!';
        }
        else if(guess > 4) {
            console.log('too high');
            guessResults.innerText = 'Last guess was too high!';
        }
        totalGuesses = totalGuesses + 1;
        console.log(totalGuesses);
    }

    return false;
}

function setGameOver() {
    guessResults.innerText = '';
    guessSubmit.disabled = false;
    guessReset.disabled = true;
    totalGuesses = 0;
}

