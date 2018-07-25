/* exported checkRiddleAnswer */


var guessInterface = {
    form: document.getElementById('jersey-form'),
    results: document.getElementById('jersey-results'),
};

var guessForm = document.getElementById('guess-form');
var totalGuesses = 0

function checkRiddleAnswer() {
    var guess = guessForm.customElements.number.value;

    console.log(guess);

    if (guess === "") {
        // let them know that they won
    }
    else {
        guessResults.innerText = 'Wrong';
        totalGuesses += 1
        console.log(totalGuesses)
    }
}

-------------

var guessInterface = {
    form: document.getElementById('jersey-form'),
    results: document.getElementById('jersey-results'),
};

var guessAttempts = 0;

function checkJerseyAnswer() {
    var guess = guessInterface.form.jersey.value;

    console.log(guess);

    if(guess === "blowing in the wind") {
        // let them know that they won
        guessInterface.results.innerText = 'The answer, my friend, is blowing in the wind';
        console.log('they riddled correctly!');
    }
    else {
        guessInterface.results.innerText = 'Wrong';
        guessAttempts += 1;
        console.log(guessAttempts);
    }

    return false;
}
