
function countTags() {
    var tags = document.querySelectorAll('input[name=tags]:checked');  //collects checked boxes
    console.log('these are all my tags: ', tags);
    var tagCount = {};   // empty variable to which we will add properties
    return false;
}

for(var i = 0; i < tags.length; i++) {
    var tag = tags[i].value; // this takes the value of a particular tag
    console.log(tag);
    var matches = document.querySelectorAll(tag);
    tagCount[tag] = 
}


//var tag = 'p'; //assigns variable? but why?
//var matches = document.querySelectorAll(tag); 
//tagCount[tag] = matches.length; 

