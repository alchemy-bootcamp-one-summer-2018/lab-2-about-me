/* exported checkJerseyAnswer */

var guessInterface = {
    form: document.getElementById('jersey-form'),
    results: document.getElementById('jersey-results'),
};

var guessAttempts = 0;

function checkJerseyAnswer() {
    var guess = guessInterface.form.jersey.value;

    console.log('guess:', guess);

    if(guess === 38) {
        guessInterface.results.innerText = 'Right!';
        console.log('You guessed correctly!');
    }
    else {
        guessInterface.results.innerText = `Attempt number ${guessAttempts} is wrong... Try again.`;
        guessAttempts += 1;
        console.log('guess attempts:', guessAttempts);
    }

    return false;
}
