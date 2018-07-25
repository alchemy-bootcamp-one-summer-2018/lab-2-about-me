/* exported checkJSAnswers, resetJSAnswers */

var factsForm = document.getElementById('facts-form');
var factsSubmit = document.getElementById('js-submit');
var factsReset = document.getElementById('js-reset');
var factsResults = document.getElementById('js-results');

function checkJSAnswers() {
    console.log('checkJSAnswers called');
    var elements = factsForm.elements;
    var vegetable = elements.vegetable.value;
    var misdemeanors = elements.misdemeanors.value;
    var sister = elements.sister.value;
    var moon = elements.moon.value;
    var tall = elements.tall.value;

    console.log('vegetable', vegetable);
    console.log('misdemeanors', misdemeanors);
    console.log('sister', sister);
    console.log('moon', moon);
    console.log('tall', tall);

    var correct = 0;

    if(vegetable.toLowerCase() === 'yes') {
        correct = correct + 1;
    }

    if(misdemeanors.toLowerCase() === 'yes') {
        correct = correct + 1;
    }

    if(sister.toLowerCase() === 'yes') {
        correct = correct + 1;
    }

    if(moon.toLowerCase() === '286 million') {
        correct = correct + 1;
    }

    if(tall.toLowerCase() === 'yes') {
        correct = correct + 1;
    }


    factsResults.innerText = 'Congrats! You got ' + correct + ' out of 5 correct';
    factsSubmit.disabled = true;
    factsReset.disabled = false;

    function resetJSAnswers() {
        factsResults.innerText = '';
        factsSubmit.disabled = false;
        factsReset.disabled = true;
    }


    return false;

}