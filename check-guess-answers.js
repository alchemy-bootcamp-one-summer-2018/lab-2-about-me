/* exported checkGuessAnswer */

// get the elements we need to use
var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');
var guessSubmit = document.getElementById('guess-submit');

// track "state" _across_ calls to checkGuessAnswer
var totalGuesses = 0;

function checkGuessAnswer() {
    var guess = guessForm.elements.number.value;

    // eslint-disable-next-line
    if(guess == 4) {
        console.log('correct');
        guessResults.innerText = 'Wow, you\'re so smart you will make an excellent spaceship captain';
        guessResults.style.backgroundColor = 'green';
    }
    else if(totalGuesses === 5) {
        console.log('no more guesses');
        guessResults.innerText = 'GAME OVER!';
        guessResults.style.backgroundColor = 'red';
    }
    else {
        guessResults.innerText = 'Wrong, you will never be a glorious spaceship captain!';
        guessResults.style.backgroundColor = 'red';
        if(guess < 4) {
            console.log('too low');
            guessResults.innerText = 'Last guess was too low!';
        }
        else if(guess > 4) {
            console.log('too high');
            guessResults.innerText = 'Last guess was too high!';
        }
        // now we can increment and hold onto the value across
        // calls to this function (this function only increases
        // the value, it doesn't initialize the value)
        totalGuesses = totalGuesses + 1;
        console.log(totalGuesses);
    }

    return false;
}

function setGameOver() {
    guessSubmit.disabled = true;
    var resetButton = document.createElement ('button');
    resetButton.textContent = 'Start New Game';
    document.body.appendChild(resetButton);
}

