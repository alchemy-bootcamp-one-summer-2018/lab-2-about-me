/* export checkAboutMeAnswers */
/* export resetAboutMeAnswers */

var factForm = document.getElementById('facts-form');
var aboutMeResults = document.getElementById('aboutMe-results');
var aboutMeSubmit = document.getElementById('aboutMe-submit');
var aboutMeReset = document.getElementById('aboutMe-reset');

function checkAboutMeAnswers(){
    console.log('hey bud');

    var elements = factForm.elements;
    var hometown = elements.hometown.value;
    var glassesAge = elements.glassesAge.value;
    var collegePlace = elements.collegePlace.value;
    var numOfSibs = elements.numOfSibs.value;
    var career = elements.career.value;

    console.log('hometown', hometown);
    console.log('glassesAge', glassesAge);
    console.log('collegePlace', collegePlace);
    console.log('numOfSibs', numOfSibs);

    var correct = 0;

    if(hometown.toLowerCase() === 'la' || hometown.toLowerCase() === 'los angeles') {
        console.log('town');
        correct = correct + 1;
    }
    if(glassesAge == 10 || glassesAge.toLowerCase() === 'ten') {
        console.log('age correct');
        correct = correct + 1;
    }
    // eslint-disable-next-line
    if(collegePlace.toLowerCase() === 'ucsb' || collegePlace.toLowerCase() === 'santa barbara'){
        console.log('college correct');
        correct = correct + 1;
    }
    if(numOfSibs === 'oneBro'){
        console.log('one sweet bro');
        correct = correct + 1;
    }
    if(career === 'coffee'){
        console.log('career correct');
        correct = correct +1;
    }
    if(correct >= 3){
        aboutMeSubmit.innerText = 'You got ' + correct + ' out of 5! Great job, you know me well.';
    }
    if(correct < 3){
        aboutMeSubmit.innerText = 'You got ' + correct + ' out of 5... Clearly you need to brush up on my history.';
    }
    aboutMeSubmit.disabled = true;
    aboutMeReset.disabled = false;


    return false;
}

function resetAboutMeAnswers(){
    aboutMeResults.innerText = '';
    aboutMeSubmit.innerText = 'How did I do?'
    aboutMeSubmit.disabled = false;
    aboutMeReset.disabled = true;
}