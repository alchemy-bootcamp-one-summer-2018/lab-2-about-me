var factForm = document.getElementById('facts-form');
var factResults = document.getElementById('js-results');
var factSubmit = document.getElementById('js-submit');
var factReset = document.getElementById('js-reset');

function checkJSAnswers() {

    console.log('checkJSAnswers called');
    console.dir(factForm);
}

    var elements = factForm.elements;

    var inventor = elements.inventor.value;

    var runInBrowser = elements.runInBrowser.value;

    console.log('dessert', inventor);
    console.log('runInBrowser', runInBrowser);

    var correct = 0;

    if(inventor.toLowerCase() === 'cake') {

        correct = correct + 1;

        if(runInBrowser.toLowerCase() === 'yes') {

            correct = correct + 1;
        }

        factResults.innerText = 'You got ' + correct + ' out of 2 right';
        factSubmit.disabled = true;

        factReset.disabled = false;

        return false;
    }
    function resetJSAnswers() {
        factResults.innerText = '';
        factSubmit.disabled = false;
        factReset.disabled = true;
    }