var factForm = document.getElementById('facts-form');
var factResults = document.getElementById('js-results');

function checkJSAnswers() {
    console.log('checkJSAnswers called');

var elements = factForm.elements;
var dessert = elements.dessert.value;
console.log('dessert', dessert);
var correct = 0;
if(dessert.toLowerCase() === 'cake'){
    correct = correct + 1;
}
factResults.innerText = 'You got ' + correct + ' out of 5 right';
return false;
}
