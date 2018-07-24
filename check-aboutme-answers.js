
var factForm = document.getElementById('facts-form');
var aboutMeResults = document.getElementById('aboutMe-results');
var aboutMeSubmit = document.getElementById('aboutMe-submit');
var aboutMeReset = document.getElementById('aboutMe-reset');

function checkAboutMeAnswers(){
    console.log('hey bud');

    var elements = factForm.elements;

    var hometown = elements.hometown.value;

    var glassesAge = elements.glassesAge.value;

    console.log('hometown', hometown);
    console.log('glassesAge', glassesAge);
    
    return false;
}