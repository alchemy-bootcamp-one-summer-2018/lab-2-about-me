/* exported checkAboutMeAnswers, resetAboutMeAnswers */


var aboutInterface = {
    form: document.getElementById('about-me-form'),
    submit: document.getElementById('about-me-submit'),
    reset: document.getElementById('about-me-reset'),
    results: document.getElementById('about-me-results'),
};

function checkAboutMeAnswers() {

    var elements = aboutInterface.form.elements;


    var answerInput = {
        seaAnimal: elements.seaAnimal.value.toLowerCase(),
        pets: elements.pets.value,
        classicRock: elements.classicRock.value,
        hardcore: elements.hardcore.value,
        book: elements.book.value,
    };

    var answerKey = {
        seaAnimal: 'octopus',
        pets: 'pets=dog&pets=fish&pets=snake',
        classicRock: 'sabbath',
        hardcore: 'rollins-band',
        book: 'huckleberry'
    };


    console.log('checkAboutMeAnswers called');
    console.dir(aboutInterface.form);


    console.log('answerInput', answerInput);
    console.log('answerKey', answerKey);

    var score = 0;

    // fix the following for loop

/*
    function(object1, object2){
        for (var key in object){
            if object1.key === object2.key
                score += 1;

        }
    }

    for(var key in answerInput){
        for(var key in answerKey){
            if answerInput.key === answerKey.key{
                score += 1;
            }
        }
    }
*/


    for(var key in answerInput){
        if((answerInput.hasOwnProperty(key)) &&
            (answerInput[key] === answerKey[key])){
            score += 1;
        }
    }

    aboutInterface.results.innerText = `You got ${score} correct!`;
    aboutInterface.submit.disabled = true;
    aboutInterface.reset.disabled = false;

    return false;
}


function resetAboutMeAnswers(){
    aboutInterface.results.innerText = '';
    aboutInterface.submit.disabled = false;
    aboutInterface.reset.disabled = true;
}
