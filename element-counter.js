/*exported countTags*/
function countTags() {
    var tags = document.querySelectorAll('input[name=tags]:checked');
    console.log('function works');
    console.log(tags);
    var tagCount = {};
    var html = '<ul>';
    for(var i = 0; i < tags.length; i++) {
        console.log(tags[i].value);
        var tag = tags[i].value;
        var matches = document.querySelectorAll(tag);
        console.log(matches.length);
        tagCount[tag] = matches.length;
        console.log(tagCount);
    }

    for(var x = 0; x < tags.length; x++) {
        var key = Object.keys(tagCount)[x];
        html += `<li> ${key} ${tagCount[x]} + <li>`;
    }

    return false;
}
