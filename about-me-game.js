/* exported checkAboutMeAnswers, resetAboutMeAnswers */


var aboutElements = {
    form: document.getElementById('about-me-form'),
    submit: document.getElementById('about-me-submit'),
    reset: document.getElementById('about-me-reset'),
    results: document.getElementById('about-me-results'),
};

var score = 0;

function checkAboutMeAnswers() {
    console.log('checkAboutMeAnswers called');
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


function resetAboutMeAnswers(){
    results.innerText = '';
    submit.disabled = false
    reset.disabled = true
}
