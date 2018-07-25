# Lab 3 Element Counter

This lab adds the ability to analyze your "about me" 
website by allowing the user to check the type of elements 
they would like to count. When they submit, your new code
will provide element counts for the selected elements

## Branch

Make a branch for today's lab!

```sh
> git checkout -b element-count
```

## Tools

* Use a Manage a form submission like we did in yesterdays lab
* Use `document.querySelectorAll` to find matching elements
* Use arrays and objects to manage the data
* Mediate the data between JavaScript and the visible DOM output

## Steps

### Wire the form submit event to the handler function

1. Start by creating a form that has a series of checkboxes that all have the
same name and each one has a value indicating what tag name in represents (`p`,
`section`, `input`, etc). Try and include a broad set of tag names.

2. Create a function in a stand alone `.js` file (don't forget to add `return false;`) and log a message to let you know the function fired

3. Wire the `onsubmit` of the form to call the function and validate that it logs the message
and prevents the form from changing the page

### Gather the selected checkboxes, analyze DOM, set results

1. In your function, get a list of all the checked checkboxes by using:
    ```js
    var tags = document.querySelectorAll('input[name=tags]:checked');
    ```
1. Create an empty object variable `tagCount` to which you can add properties
1. Loop the `tags` and for each one:
    1. Get the value of the checkbox by calling `tags[i].value` and
    store in a `tag` variable
    1. Call `document.querySelectorAll(tag)` and store the length in a new
    property whose key is the tag name
1. Console log `tagCount` and check that the value is correct
1. Create a variable `html` whose value is: `<ul>`
1. Loop the `tags` again, and this time for each tag:
    1. Get the count property value off `tags` using the tag name
    2. Append a string to `html` that is html for a `li` that has tag a count as text, for example:
        ```html
        <li>p 15</li>
        ```
1. Add the closing `</ul>` to `html`
1. Assign `html` as the `.innerHTML` of the element in which you are going to display the results
