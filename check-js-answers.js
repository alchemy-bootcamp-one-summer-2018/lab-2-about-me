var factsForm = document.getElementById('facts-form');
var factsSubmit = document.getElementById('js-submit');
var factsReset = document.getElementById('js-reset');
var factsResults = document.getElementById('js-results')

function checkJSAnswers() {
    console.log('checkJSAnswers called');
    var elements = factsForm.elements;
    var vegetable = elements.vegetable.value;
    var misdemeanors = elements.misdemeanors.value;

    console.log('vegetable', vegetable);
    console.log('misdemeanors', misdemeanors);

    var correct = 0;

    if (vegetable.toLowerCase() === 'yes') {
        correct = correct + 1;
    } //so I'm calling a function here???

    if (misdemeanors.toLowerCase() === 'yes') {
        correct = correct + 1;
    }

    factsResults.innerText = 'Congrats! You got ' + correct + ' out of 5 correct';
    factsSubmit.disabled = true;
    factsReset.disabled = false;

    function resetJSAnswers() {
        factsResults.innerText = '';
        factsSubmit.disabled = false;
        factReset.disabled = true;
    }


    return false;

}