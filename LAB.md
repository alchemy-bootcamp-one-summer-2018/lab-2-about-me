# Assignment Overview: Lab 2

- Your assignment will be to create an "About Me" HTML and JS project.

## Instructions

### Static About Me

Use Html (and what CSS you know), to allow people to quickly learn a few things about you, 
such as a short bio, my education, an overview of my job experience, and my goals. Use 
headers and semantic html (as best you know) to structure your content.

### Guessing Games

Give the visitors to your About Me page the option to play at least two guessing games 
that shows how fun-loving and interesting you are, and maybe include things about yourself 
that would not ordinarily appear in a portfolio page. Be creative and fun and whimsical. 
Or not. It's up to you! It's your project! (HINT: no one will check if this is real or not)

For each game:

1. Use a `<form onsubmit="return checkAboutMe()">` to hold the prompts and form controls for each game.
    1. Use consistent from control HTML group structuring 
    1. Use CSS classes for consistent styling
1. Add a submit button for user to click to indicate they are submitting their answer(s) and a reset button with "Play Again" to allow user to play the game again.
1. Write the function for each game that checks the users results. Provide feedback to the user by one or more:
    1. Write textual response to one or more elements with result ("You got 4/5 correct") _or_ hints ("Way off, guess higher")
    1. Enhance UI to give visual feedback (for example: success green, fail red) by adding classes to elements using `classList.add`, `element.disable = true`, etc.
    1. For games the track state between responses, use variables scoped _outside_ the function.
    1. Don't forget `return false;` as last line of function to keep form from changing the page!
    1. HINT: Be careful with JavaScript's casual handling of string to numbers. Validate (check/test) your assumptions!
    
### Games
 1. Yes/No game
     1. Ask a series of five questions about you (based on the content of the html/css section).
     1. Can be yes/no, multiple choice, or text
     1. When done with questions, report how they did (either 4/5 or 80%) back to the page
 1. Guess an answer game
     1. Prompt them with question
     2. If they got it wrong, tell them so, how many guesses left, and maybe a hint. You can use alert, or add to re-prompt
     3. If they got it right, alert them and then modify the page to show the completed successfully
     4. If they exhausted all guesses, modify page to show they did not complete
1. STRETCH GOALS: Moar games!
     * Reverse word
     * Determine if palindrome
     * Addition Calculator
     
### Technical Requirements for "About Me"

- HTML, CSS, and JavaScript must be cleanly written with correct indentation and syntax. Look at examples online and in your textbook. 
- Note that your JS must pass the rules in the linter that we installed. You need to have the linter running while developing your solution. Make sure to keep the included `.travis.yml`
- Use a separate file for each game (Don't forget to add a `<script>`
- Your JS file contains a 'use strict' declaration at the top.
- Functions used outside each file need to be "exported".
- Guessing game ideas: about you that involves **FIVE** yes/no questions. 
- Useful and descriptive `console.log()` messages in the JS are well written and correctly displaying to the browser console.
- Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
- Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.
