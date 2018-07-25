/* exported checkRiddleAnswer */

var riddleInterface = {
    form: document.getElementById('riddle-form'),
    results: document.getElementById('riddle-results'),
};

var riddleAttempts = 0;

function checkRiddleAnswer() {
    var guess = riddleInterface.form.riddle.value;

    console.log(guess);

    if(guess === 'blowing in the wind') {
        // let them know that they won
        riddleInterface.results.innerText = 'You are a man of good taste';
        console.log('they riddled correctly!');
    }
    else if(riddleAttempts <= 3){
        riddleInterface.results.innerText = 'Wrong, my friend';
        riddleAttempts += 1;
        console.log(riddleAttempts);
    }
    else {
        riddleInterface.results.innerText = 'The answer, my friend, is blowing in the wind!';
        console.log('they ran out of guesses');
    }

    return false;
}
