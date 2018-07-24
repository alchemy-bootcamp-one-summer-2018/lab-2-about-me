/* exported checkJSAnswers, resetJSAnswers */


var form = document.getElementById('facts-form');
var results = document.getElementById('js-results');
var submit = document.getElementById('js-submit');
var reset = document.getElementById('js-reset');

/*
formElemets = {
    form: document.getElementById('facts-form');

}
*/

// if I use a hash instead, be share to change the references to hash values instead of variables


var score = 0;

function checkJSAnswers() {
    console.log('checkJSAnswers called');
    console.dir(form);

    var elements = form.elements;

/*
    for element in elements
        var answers += element: elements.element.value
*/

    var questions = ['inventor', 'runInBrowser']

/*
    // for element in questions
    //     console.log(question[0], form.elements.questions[0]  )     // change control flow
*/

    var answers = {
        inventor: "Eich",
        runInBrowser: "yes"
    };

/*
    for key in answers
        if key.toLowerCase() === value
        score += 1
*/

    results.innerText = `You got ${score} correct!`;
    submit.disabled = true;
    reset.disabled = false;

    return false;
}


function resetJSAnswers(){
    results.innerText = '';
    submit.disabled = false
    reset.disabled = true
}
