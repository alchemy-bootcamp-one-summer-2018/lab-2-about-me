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
        var tag= tags[j].value;
        var matches = document.querySelectorAll(tag)
        tagCount[tag] = matches.length;
    }
    var html = "ul";
   
    for(var k = 0; k <tags.length; k++) {
        html = html + "<li> + tagCount[tag] + </li>"
    }
    console.log(Object.keys(tagCount));
  


    return false;
}
countTags = countTags;

    



