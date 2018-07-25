/* exported checkJSAnswers, resetJSAnswers */

var factsForm = document.getElementById('facts-form');
var factResults = document.getElementById('js-results');
var factSubmit = document.getElementById('js-submit');
var factReset = document.getElementById('js-reset');

function checkJSAnswers() {
    console.log('checkJSAnswers called');
    console.dir(factsForm);

    var elements = factsForm.elements;
    var state = elements.state.value;
    var runInBrowser = elements.runInBrowser.value;
    var condiment = elements.condiment.value;

    console.log('state', state);
    console.log('runInBrowser', runInBrowser);
    console.log('condiment', condiment);

    var correct = 0;
    if(state.toLowerCase() === 'massachusetts') {
        correct = correct + 1;
    }
    if(runInBrowser.toLowerCase() === 'yes') {
        correct = correct + 1;
    }
    if(condiment.toLowerCase() === 'ranch') {
        correct = correct + 1;
    }

    factResults.innerText = 'Congrats! You got ' + correct + ' out of 3 right!';
    factSubmit.disabled = true;
    factReset.disabled = false;
    return false;
}
function resetJSAnswers() {
    factResults.innerText = '';
    factSubmit.disabled = false;
    factReset.disabled = true;
}