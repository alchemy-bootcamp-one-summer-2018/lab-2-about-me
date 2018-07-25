function countTags() {
    var tags = document.querySelectorAll('input[name="tags"]:checked');
    console.log('Showing', tags);
    var tagCount = {};
    var i;
    for(i = 0; i < tags.length; i++) {
        var tag = tags[i].value;
        console.log('What is', tag);
        var matches = document.querySelectorAll(tag);
        console.log('What are', matches);
        tagCount[tag] = matches.length;
        console.log('How many', tagCount);
    }
    return false;
}
var l;
for(i = 0; l < tagCount; l++) {
    
}