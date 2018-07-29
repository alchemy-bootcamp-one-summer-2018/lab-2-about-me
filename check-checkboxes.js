//eslint-disable-next-line
function countTags(){  
    //tags is taking what your using in your name value and what the user checked//
    var tags = document.querySelectorAll('input[name="tags"]:checked');
    console.log ('showing', tags);

    // i is the variable in the function that we are using in our loop (a loop goes through data in this case we want to count how many times the input check boxes are checked and how many values of the inputs there are on our document aka your HTML)
    var tagCount = {};

    var i;
    for(i = 0; i < tags.length; i++) {
        var tag = tags[i].value;
        console.log ('what is', tag);
        var matches = document.querySelectorAll (tag);
        console.log ('what are', matches);
        tagCount[tag] = matches.length;
        console.log ('How many', tagCount);
    }
    var html = '<ul>';
    for(var key in tagCount){ // this is for ..... in loop
        console.log ('counting key', tagCount);
        html += '<li>' + key + tagCount[key] + '</li>'; // appending string to HTM

    }

    html += '</ul>';
    var results = document.getElementById ('results');
    results.innerHTML = html;

    return false;

}
