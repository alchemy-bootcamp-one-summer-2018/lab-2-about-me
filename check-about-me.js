

function checkAboutMe() {

    // Check to make sure the script is successfully connected to index.html
    console.log('checkAboutMe working');
    
    // Reference the elements used in the functions below & check to make sure it's working
    var aboutMe = document.getElementById('about-me');
    console.log('aboutMe: ', aboutMe);

    var aboutMeResults = document.getElementById('about-me-results');
    
   
   
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
        score += 1;
    }
    console.log('score: ', score);

    // Question 2
    if(countries === '7') {
        score += 1;
    }
    console.log('score: ', score);

    // Question 3
    if(foods === 'ice cream') {
        score += 1;
    }
    console.log('score: ', score);

    // Question 4
    if(yearbook === 'most likely to be late to everything') {
        score += 1;
    }
    console.log('score: ', score);

    // Question 5
    if(band === 'false') {
        score += 1;
    }
    console.log('score: ', score);



    // PART III: Report results to the user through the webpage



    // Prevents browser window from refreshing automatically
    return false;

}




