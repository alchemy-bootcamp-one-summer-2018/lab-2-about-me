
/* exported checkAboutMe, resetAboutMe */

var finalScore = document.getElementById('about-me-score');

// Getting button elements for enabling/disabling
var aboutMeSubmit = document.getElementById('about-me-submit');
var aboutMeReset = document.getElementById('about-me-reset');

function checkAboutMe() {

    // Check to make sure the script is successfully connected to index.html
    console.log('checkAboutMe working');

    // Reference the elements used in the functions below & check to make sure it's working

    // Getting info from About Me form
    var aboutMe = document.getElementById('about-me');
    console.log('aboutMe: ', aboutMe);

    // Getting elements for results display
    var q1Results = document.getElementById('question1-results');
    var q2Results = document.getElementById('question2-results');
    var q3Results = document.getElementById('question3-results');
    var q4Results = document.getElementById('question4-results');
    var q5Results = document.getElementById('question5-results');

    // PART I: Get the value of the user input for each question

    // Create a variable to store the array of data that contains user input information & test it
    var elements = aboutMe.elements;
    console.log('elements: ', elements);

    // Access the values of user inputs for each question & test:
    // Question 1
    var passport = elements.passport.value;
    console.log('passport: ', passport);
    // Question 2
    var countries = elements.countries.value;
    console.log('countries: ', countries);
    // Question 3
    var foods = elements.foods.value;
    console.log('foods: ', foods);
    // Question 4
    var yearbook = elements.yearbook.value;
    console.log('yearbook: ', yearbook);
    // Question 5
    var band = elements.band.value;
    console.log('band: ', band);



    // PART II: Check the answers

    // Declare a variable to store score
    var score = 0;

    // If answers are correct, add 1 point to score & test w/ console.log:
    // Question 1
    if(passport === 'true') {
        var q1 = 'Correct';
        score += 1;
    } else {
        q1 = 'Try again';
    }
    console.log('score: ', score);
    console.log('q1: ', q1);

    // Question 2
    if(countries === '7') {
        var q2 = 'Correct';
        score += 1;
    } else {
        q2 = 'Try again';
    }
    console.log('score: ', score);
    console.log('q2: ', q2);

    // Question 3
    if(foods === 'ice cream') {
        var q3 = 'Correct';
        score += 1;
    } else {
        q3 = 'Try again';
    }
    console.log('score: ', score);
    console.log('q3: ', q3);

    // Question 4
    if(yearbook === 'most likely to be late to everything') {
        var q4 = 'Correct';
        score += 1;
    } else {
        q4 = 'Try again';
    }
    console.log('score: ', score);
    console.log('q4: ', q4);

    // Question 5
    if(band === 'false') {
        var q5 = 'Correct';
        score += 1;
    } else {
        q5 = 'Try again';
    }
    console.log('score: ', score);
    console.log('q5: ', q5);



    // PART III: Report results to the user through the webpage

    // Tell the user their score
    finalScore.innerText = 'You got ' + score + ' out of 5 correct.';

    // Tell the user which questions they got right and which ones they didn't
    q1Results.innerText = 'Question 1: ' + q1;
    q2Results.innerText = 'Question 2: ' + q2;
    q3Results.innerText = 'Question 3: ' + q3;
    q4Results.innerText = 'Question 4: ' + q4;
    q5Results.innerText = 'Question 5: ' + q5;

    // Disable the submit button
    aboutMeSubmit.disabled = true;

    // Enable the reset button
    aboutMeReset.disabled = false;

    // Prevents browser window from refreshing automatically
    return false;

}

// This function will run whenever the user presses the Try Again button
function resetAboutMe() {
    // resets results and button properties to original settings
    finalScore.innerText = '';
    aboutMeSubmit.disabled = false;
    aboutMeReset.disabled = true;
}


