<form id="facts-form" 
          onsubmit="return checkJSAnswers()"
          onreset="resetJSAnswers()">
        <div>
          <label>Who invented JavaScript?</label>
          <p><input type="text" name="inventor" required></p>
        </div>
        <div>
            <p>Who JavaScript run in the Browser?</p>
            <p>
                <label>
                    <input type="radio" name="runInBrowser" 
                        value="yes" required> Yes
                </label>
                <label>
                    <input type="radio" name="runInBrowser" 
                        value="no" required> No
                </label>
            </p>
        </div>
        <button id="js-submit" type="submit">Check Answers</button>
        <button id="js-reset" type="reset" disabled>Play Again</button>

        <p id="js-results"></p>
    </form>

    <form id="guess-form" onsubmit="return checkGuessAnswer()">
        <p>Guess a number between 1 and 10 (inclusive)</p>
        <input name="number" require>
        <button type="submit">Guess</button>

        <p id="guess-results"></p>
    </form>
    

    <script src="check-js-answers.js"></script>
    <script src="check-guess-answers.js"></script>
</body>
</html>


/* exported checkJSAnswers, resetJSAnswers */

// Reference all the elements (by id) that we are going
// to need to use in our functions
var factForm = document.getElementById('facts-form');
var factResults = document.getElementById('js-results');
var factSubmit = document.getElementById('js-submit');
var factReset = document.getElementById('js-reset');

// function that will run when "submit" event happens on 
// form (because we put onsubmit="return checkJSAnswers()")
function checkJSAnswers() {

    // PART 1 - GET THE VALUES

    // log some details about fact that function is being run
    // add take a look at form output
    console.log('checkJSAnswers called');
    console.dir(factForm);
    // form exposes a special "elements" property (just part of how forms
    // work in the browser). This gives us access to all the input controls,
    // so we can get the values out of them.
    var elements = factForm.elements;

    // we can access the value of any input by using it's "value" property
    // a text input has the value in the control that the user typed
    var inventor = elements.inventor.value;
    // a radio group has the value from the input that is checked
    var runInBrowser = elements.runInBrowser.value;

    // inspecting those value to make sure we got it
    console.log('inventor', inventor);
    console.log('runInBrowser', runInBrowser);

    // PART 2 - Check those answers (values)

    // keep count of correct answers in a variable
    var correct = 0;

    // check answer 1
    if(inventor.toLowerCase() === 'eich') {
        // if correct, add 1 to correct count
        correct = correct + 1;
    }
    
    // check answer 2
    if(runInBrowser.toLowerCase() === 'yes') {
        // increment the correct count
        correct = correct + 1;
    }

    // PART 3 - Report results to the user

    // inner text for freeform text response
    factResults.innerText = 'You got ' + correct + ' out of 2 right';
    // disable the submit button (because game is done)
    factSubmit.disabled = true;
    // enable the reset button (because it is the Play Again button)
    factReset.disabled = false;

    // we need this to keep the form from changing/refreshing the webpage
    return false;
}

// function that will run when a reset event happens on the form
// via onreset="resetJSAnswers()"
function resetJSAnswers() {
    // put everything back to how it was at start of game
    factResults.innerText = '';
    factSubmit.disabled = false;
    factReset.disabled = true;
}



/* exported checkGuessAnswer */

// get the elements we need to use
var guessForm = document.getElementById('guess-form');
var guessResults = document.getElementById('guess-results');

// track "state" _across_ calls to checkGuessAnswer
var totalGuesses = 0;

function checkGuessAnswer() {
    var guess = guessForm.elements.number.value;

    // eslint-disable-next-line
    if(guess == 7) {
        // go ahead and end game and let user know they won
    }
    else {
        guessResults.innerText = 'Wrong';
        // now we can increment and hold onto the value across
        // calls to this function (this function only increases
        // the value, it doesn't initialize the value)
        totalGuesses = totalGuesses + 1;
        console.log(totalGuesses);
    }

    return false;
}