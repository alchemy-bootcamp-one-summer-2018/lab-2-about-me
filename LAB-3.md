# Lab 3 Element Counter
===

This lab adds the ability to analyze your "about me" 
website by allowing the user to check the type of elements 
they would like to count. When they submit, your new code
will provide element counts for the selected elements

## Tools

* Use a form to gather user input like we did in yesterdays lab.
* Use the DOM `event` object , but 
this time pass the event object and call `event.preventDefault()` in your

* Use a Manage a form submission like we did in yesterdays lab, but 
this time pass the event object and call `event.preventDefault()` in your
* Use `document.querySelectorAll` to find matching elements
* Use arrays and objects to manage the data
* Mediate the data between JavaScript and the visible DOM output

## Steps

### Wire the form submit event to the handler function

1. Start by creating a form that has a series of checkboxes that all have the
same name and each one has a value indicating what tag name in represents (`p`,
`section`, `input`, etc). Try and include a broad set of tag names.

2. Create a function in a stand alone `.js` file that takes the `event` object
and logs a message to let you know the function fired and then calls `event.preventDefault()`

3. Wire the `onsubmit` of the form to call the function and validate that it logs the message
and prevents the form from changing the page

