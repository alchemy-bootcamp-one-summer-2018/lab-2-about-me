
/* Exported resetJSAnswers, checkJSAnswers */

var factForm = document.getElementById('fact-form');
var factSubmit = document.getElementById('js-submit');
var factResult = document.getElementById('js-result');
var factReset = document.getElementById('js-reset');


function checkJSAnswers() {
    console.log ('checkJSAnswers called');
    var elements = factForm.elements;
    var school = elements.school.value;
    var mtv = elements.mtv.value;
    var state = elements.state.value;
    var career = elements.career.value;
    var smell = elements.smell.value;

    console.log('this is to see if variable is working', school);

    var correct = 0;

    if(school === 'yes') {
        correct = correct + 1;
    }

    if(mtv === 'yes') {
        correct = correct + 1;
    }

    if(state === 'yes') {
        correct = correct + 1;
    }

    if(career === 'yes') {
        correct = correct + 1;
    }

    if(smell === 'yes') {
        correct = correct + 1;
    }

    factResult.innerText = 'HIGH-FIVE!!! You got ' + correct + ' out of 5 right!';
    factSubmit.disabled = true;
    factReset.disabled = false;

    return false;
}


function resetJSAnswers() {

    factResult.innerText = '';
    factSubmit.disabled = false;
    factReset.disabled = true;
}