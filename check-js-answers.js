
/*Exported checkJSAnswers, resetJSAnswers*/

var factForm = document.getElementById("fact-form");
var factSubmit = document.getElementById("js-submit");
var factResult = document.getElementById("js-results");
var factReset = document.getElementById("js-reset");



function checkJSAnswers () {
console.log ('checkJSAnswers called') 

    var elements = factForm.elements;
    var school = elements.school.value;
    var mtv = elements.mtv.value;
    var state = elements.state.value
    var career = elements.career.value

    console.log('school var', school);

    var correct = 0;

    if (school  === 'yes') {
    correct = correct + 1;
    }   

    if (school || mtv || state || career === 'yes') {
        correct = correct + 1;
        }   


factResult.innerText = 'wow you got ' + correct + ' out of 5 right';
factSubmit.disabled = true; 
factReset.disabled = false;

return false;

}

function resetJSAnswers() {
    factResult.innerText = '';
    factSubmit.disabled = false;
    factReset.disabled = true;
}
