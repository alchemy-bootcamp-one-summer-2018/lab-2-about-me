var factForm = document.getElementById('facts-form');
var factResults = document.getElementById('js-results');

function checkJSAnswers() {
    console.log('checkJSAnswers called');

    var elements = factForm.elements;
    var hometown = elements.hometown.value;
    var runInBrowser = elements.runInBrowser.value;
 
    console.log('hometown', hometown);
    console.log('runInBrowser', runInBrowser);
    
    var correct = 0;

    if(hometown.toLowerCase() === 'portland') {
        correct = correct + 1;
    }
    if(runInBrowser.toLowerCase() === 'yes') {
        correct = correct + 1;
    }
    console.log('results1')
    factResults.innerText = 'You got ' + correct + ' out of 5 right';
    return false;
    
    
    }
    