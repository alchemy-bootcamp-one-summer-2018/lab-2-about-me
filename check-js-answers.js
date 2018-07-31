/* exported checkJSAnswers */
/* exported resetJSAnswers */

var bioForm = document.getElementById('bio-form');
var bioResults = document.getElementById('js-results');
var bioSubmit = document.getElementById('js-submit');
var bioReset = document.getElementById('js-reset');
var moveInput = document.getElementById('move-input');
var jobInput = document.getElementById('job-input');
var langInput = document.getElementById('language-input');
var pizzaInput = document.getElementById('pizza-input');
var candyButtons = document.getElementById('candy-buttons');

function checkJSAnswers() {

    // PART 1

    console.log('checkJSAnswers called');
    console.dir(bioForm);

    var elements = bioForm.elements;

    var moved = elements.moved.value;
    var job = elements.job.value;
    var lang = elements.lang.value;
    var pizza = elements.pizza.value;
    var candySelection = elements.candySelection.value;

    console.log('moved', moved);
    console.log('job', job);
    console.log('lang', lang);
    console.log('pizza', pizza);
    console.log('candySelection', candySelection);

    // PART 2

    var correct = 0;

    if(moved.toLowerCase() === 'missouri') {
        moveInput.classList.add('correctAnswer');
        correct = correct + 1;
    }
    else {
        while(moveInput.classList.length > 0) {
            moveInput.classList.remove(moveInput.classList.item(0));
        }
        moveInput.classList.add('wrongAnswer');
    }

    if(job.toLowerCase() === 'sysadmin') {
        jobInput.classList.add('correctAnswer');
        correct = correct + 1;
    }
    else {
        while(jobInput.classList.length > 0) {
            jobInput.classList.remove(jobInput.classList.item(0));
        }
        jobInput.classList.add('wrongAnswer');
    }

    if(lang.toLowerCase() === 'python') {
        langInput.classList.add('correctAnswer');
        correct = correct + 1;
    }
    else {
        while(langInput.classList.length > 0) {
            langInput.classList.remove(langInput.classList.item(0));
        }
        langInput.classList.add('wrongAnswer');
    }

    if(pizza.toLowerCase() === 'bellagios') {
        pizzaInput.classList.add('correctAnswer');
        correct = correct + 1;
    }
    else {
        while(pizzaInput.classList.length > 0) {
            pizzaInput.classList.remove(pizzaInput.classList.item(0));
        }
        pizzaInput.classList.add('wrongAnswer');
    }

    if(candySelection.toLowerCase() === 'yes') {
        candyButtons.classList.add('correctAnswer');
        correct = correct + 1;
    }
    else {
        while(candyButtons.classList.length > 0) {
            candyButtons.classList.remove(candyButtons.classList.item(0));
        }
        candyButtons.classList.add('wrongAnswer');
    }

    // PART 3

    bioResults.innerText = 'You got ' + correct + ' out of 5 right';

    bioSubmit.disabled = true;

    bioReset.disabled = false;

    return false;

}

function resetJSAnswers() {
    bioResults.innerText = '';
    bioSubmit.disabled = false;
    bioReset.disabled = false;
    
    while(moveInput.classList.length > 0) {
        moveInput.classList.remove(moveInput.classList.item(0));
    }

    while(jobInput.classList.length > 0) {
        jobInput.classList.remove(jobInput.classList.item(0));
    }

    while(langInput.classList.length > 0) {
        langInput.classList.remove(langInput.classList.item(0));
    }

    while(pizzaInput.classList.length > 0) {
        pizzaInput.classList.remove(pizzaInput.classList.item(0));
    }

    while(candyButtons.classList.length > 0) {
        candyButtons.classList.remove(candyButtons.classList.item(0));
    }

    return false;
}