/* exported countTags */
function countTags() {
    console.log('function is running');
    var tags = document.querySelectorAll('input[name=tags]:checked');
    console.log('tags', tags);
    var tagCount = {};
    for(var i = 0; i < tags.length; i++) {
        console.log(tags[i].value);
        var tag = tags[i].value;
    }
    for(var j = 0; j < tags.length; j++) {
        var matches = document.querySelectorAll(tag);
        tagCount[tag] = matches.length;
    }
    var html = '<ul>';
    for(var k = 0; k < tags.length; k++) {
        html =
        html + '<li>' + tags[k].value + tagCount[tag] + '</li>';
    }
    html += '</ul>';
    console.log(html);


    var result = document.getElementById('results');
    result.innerHTML = html;


    return false;
}

// for number of items in countTags object
// each loop pass, add '<li>' + key of countTags + value of countTags + '</li>'
// into a string.

// Take string of <li> tag: # of times tag appears </li> and add
// <ul> to the beginning, and </ul> to the end
// Take completed string and insert it into index.html
// var tag= tags[i].value; var matches = document.querySelectorAll(tag);
// tagCount[tag] = matches.length; {
//     console.log ('tagCount', tagCount);
// }


