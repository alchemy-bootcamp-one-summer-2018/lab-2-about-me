var factForm = document.getElementById('facts-form');
var factResults = document.getElementById('js-results');
var factSubmit = document.getElementById('js-submit');
var factReset = document.getElementById('js-reset');

function checkJSAnswers() {
 console.log('checkJSAnswers called');


 var elements = factForm.elements;
 var dessert = elements.dessert.value;
 var runInBrowser = elements.runInBrowser.value;
 var waffle = elements.waffle.value;
 var iceCream = elements.iceCream.value;
 var noodles = elements.noodles.value;

console.log('dessert', dessert);
console.log('runInBrowser', runInBrowser);
console.log('iceCream', iceCream);
console.log('noodles', noodles);

var correct = 0;
if(dessert.toLowerCase() === 'cake') {
    correct = correct + 1;
}
console.log ('results');
if(runInBrowser.toLowerCase() === 'yes') {
    correct = correct + 1;
}
console.log('results');
if(iceCream.toLowerCase() === 'choc') {
    correct = correct + 1;
}
console.log('results');
if(noodles.toLowerCase() === 'yes') {
    correct = correct + 1;
}
console.log('results');
if(waffle.toLowerCase() === 'yes') {
    correct = correct + 1;
}
factResults.innerText = 'You got ' + correct + ' out of 5 right';
 return false;
}
