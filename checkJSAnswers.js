var factForm = document.getElementById('facts-form');
var factResults = document.getElementById('js-results');

function checkJSAnswers() {
    console.log('checkJSAnswers called');

    var elements = factForm.elements;
    var hometown = elements.hometown.value;
 
    console.log('hometown', hometown);
    
    var correct = 0;

    if(hometown.toLowerCase() === 'portland') {
        correct = correct + 1;
    }
    console.log('results')
    factResults.innerText = 'You got ' + correct + ' out of 5 right';
    return false;
}