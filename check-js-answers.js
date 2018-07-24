


var factForm = document.getElementById("fact-form");
var factSubmit = document.getElementById("js-submit");
var factResult = document.getElementById("js-form");
var factRest = document.getElementById ("js-reset")



function checkJSAnswers () {
console.log ('checkJSAnswers called') 

    var elements = factForm.elements;
    var school = elements.school.value
    console.log('school var', school);


// need to learn more about this

var correct = correct

    if(school === 'yes') {
    correct = correct + 1;
    }   

//result

factResult.innerText ('wow you got ' + correct + ' out 1 right');

factSubmit.disabled = true;
 
factReset.disabled = false;


return false;

}


