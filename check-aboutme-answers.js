
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
        console.log('way to go');
        correct = correct + 1;
    }
    if(glassesAge == 10 || glassesAge.toLowerCase() === 'ten') {
        console.log('hey thats right');
        correct = correct + 1;
    }
    if(collegePlace.toLowerCase() === 'ucsb' || collegePlace.toLowerCase() === 'santa barbara'){
        console.log('sb was awful');
        correct = correct + 1;
    }
    if(numOfSibs === 'oneBro'){
        console.log('one sweet bro');
        correct = correct + 1;
    }
    if(career === 'coffee'){
        console.log('that was then');
        correct = correct +1;
    }


    return false;
}