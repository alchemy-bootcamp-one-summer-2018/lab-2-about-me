var factsForm = document.getElementById('facts-form');

function checkJSAnswers() {
    console.log('checkJSAnswers called');
    console.dir(factsForm);
    var elements = factsForm.elements;
    var state = elements.state.value;
    var runInBrowser = elements.runInBrowser.value;
    console.log('state', state);
    console.log('runInBrowser', runInBrowser);
    var correct = 0;
}
    if(state.toLowerCase() === 'massachusetts') {
        correct = correct + 1;
    }
        factResults.innerText = 'Congrats! You got ' + correct + ' out of 2 right!'
        factSubmit.disabled = true;
        factReset.disabled = false;

        return false;
function resetJSAnswers() {
    factResults.innerText = '';
    factSubmit.disabled = false;
    factReset.disabled = true;
}
