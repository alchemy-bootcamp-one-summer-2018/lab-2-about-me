/* exported countTags, resetTagCounter */

function countTags() {

    // Test to make sure function is working
    console.log('countTags working');

    // Get a list of all tags selected by user & test
    var tags = document.querySelectorAll('input[name=tag]:checked');
    console.log(tags);

    // Declaring an empty object to store tag counts
    var tagCount = {};

    // Declaring html variable to be used to post results
    var html = '<ul>';

    var countResult = document.getElementById('tag-count-results');

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

        // // Get key from tagCount
        // var key = Object.keys(tagCount)[0];
        // console.log('key: ', key);

        // Append list item in html
        html += '<li>' + tag + ': ' + tagCount[tag] + '</li>';
        console.log(html);

        countResult.innerHTML = html;
    }

    // Prevents browser window from refreshing automatically
    return false;
}

function resetTagCounter() {

}

