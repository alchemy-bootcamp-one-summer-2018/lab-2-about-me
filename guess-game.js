/* exported checkJerseyAnswer */

var guessInterface = {
    form: document.getElementById('jersey-form'),
    results: document.getElementById('jersey-results'),
};

var guessAttempts = 0;

function checkJerseyAnswer() {
    var guess = guessInterface.form.jersey.value;

    console.log(guess);

    if(guess === 38) {
        // let them know that they won
        guessInterface.results.innerText = 'Right!';
        console.log('they guessed correctly!');
    }
    else {
        guessInterface.results.innerText = 'Wrong';
        guessAttempts += 1;
        console.log(guessAttempts);
    }

    return false;
}
