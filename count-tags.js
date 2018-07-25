/* exported countTags, resetTagCounter */

// Declaring html variable to be used to post results
var html = '<h4>Done! The following list shows the numbers of each HTML element type you selected:</h4><ul>';

var countResult = document.getElementById('tag-count-results');

function countTags() {

    // Test to make sure function is working
    console.log('countTags working');

    // Get a list of all tags selected by user & test
    var tags = document.querySelectorAll('input[name=tag]:checked');
    console.log(tags);

    // Declaring an empty object to store tag counts
    var tagCount = {};

    // Looping through each item in the tags object
    for(var i = 0; i < tags.length; i++) {

        // Declaring a variable equal to the value of the checkbox input & testing
        var tag = tags[i].value;
        console.log('tag: ', tag);

        // Creating a matches array by searching HTML doc for tag matches
        var matches = document.querySelectorAll(tag);
        console.log('matches: ', matches);

        // Adding tag counts to the Tag Count object with tag names as keys
        tagCount[tag] = matches.length;
        console.log('tagCount: ', tagCount);

        // Append list item in html
        html += '<li>' + tag + ': ' + tagCount[tag] + '</li>';
        if(i === (tags.length - 1)) {
            html += '</ul>';
        }
        console.log(html);

        countResult.innerHTML = html;

    }

    // Disable submit and enable reset
    document.getElementById('count-submit').disabled = true;
    document.getElementById('count-reset').disabled = false;

    // Prevents browser window from refreshing automatically
    return false;
}

function resetTagCounter() {
    document.getElementById('count-submit').disabled = false;
    document.getElementById('count-reset').disabled = true;
    countResult.innerHTML = '';
    html = '<h4>Done! The following list shows the numbers of each HTML element type you selected:</h4><ul>';
}

