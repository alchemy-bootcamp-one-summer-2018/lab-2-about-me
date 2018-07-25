/* exported checkJSAnswers, resetJSAnswers, showVal */

// Reference all the elements (by id)
var factForm = document.getElementById('facts-form');
var factResults = document.getElementById('js-results');
var factSubmit = document.getElementById('js-submit');
var factReset = document.getElementById('js-reset');
var rangeDisplay = document.getElementById('range-display');

//function that will display change of value when range is moved
function showVal(newVal){
    rangeDisplay.innerHTML = newVal;
}

// function that will run on "submit"
function checkJSAnswers() {

    // PART 1 - GET THE VALUES
    console.log('checkJSAnswers called');
    console.dir(factForm);
    var elements = factForm.elements;
    var myName = elements.myName.value;
    var thatsImpossible = elements.thatsImpossible.value;
    var noWay = elements.noWay.value;
    var heartOfGold = elements.heartOfGold.value;
    var hanSolo = elements.hanSolo.value;

    // inspecting values
    console.log('myName', myName);
    console.log('thatsImpossible', thatsImpossible);
    console.log('noWay', noWay);
    console.log('heartOfGold', heartOfGold);
    console.log('hanSolo', hanSolo);
    // PART 2 - Check those answers (values)

    // keep count of correct answers in a variable
    var correct = 0;

    // check answer 1
    if(myName.toLowerCase() === 'mack') {
        // if correct, add 1 to correct count
        correct = correct + 1;
    }

    // check answer 2
    if(thatsImpossible.toLowerCase() === 'yes') {
        // increment the correct count
        correct = correct + 1;
    }

    //check answer 3
    if(noWay.toLowerCase() === 'maybe') {
        //increment the correct count
        correct = correct + 1;
    }

    //check answer 4
    if(heartOfGold >= '7') {
        //increment the correct count
        correct = correct + 1;
    }
    //check answer 5
    if(hanSolo === 'no') {
        //increment the correct count
        correct = correct + 1;
    }
    // PART 3 - Report results to the user

    // inner text for text response
    factResults.innerText = 'You got ' + correct + ' out of 5 right. Feel free to try again!';
    factResults.style.backgroundColor = 'blue';
    factResults.style.color = 'white';
    factSubmit.disabled = true;
    factReset.disabled = false;
    return false;
}

// function that will run when a reset event
function resetJSAnswers() {
    factResults.innerText = '';
    factSubmit.disabled = false;
    factReset.disabled = true;
}
