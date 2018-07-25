/*exported countTags*/

function countTags() {
    var tags = document.querySelectorAll('input[name=tags]:checked');
    console.log('function works');
    console.log(tags);

    var tagCount = {};

    for(var i = 0; i < tags.length; i++) {
        console.log(tags[i].value);
    }

    return false;
}