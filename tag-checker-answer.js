/* exported tagCounter */


tagCounter = function(){
    var tags = document.querySelectorAll('input[name=tags]:checked');
    var tagCount = {};
    var html = '<ul>';
    console.log(tags);    
    for(i = 0; i < tags.length; i++){
        var tag = tags[i].value;
        var matches = document.querySelectorAll(tag);
        tagCount[tag] = matches.length;
        console.log('tag count', tagCount[tag]);
    }
    for(j = 0; j < tags.length; j++){
        var tag = tags[j].value;
        var matches = document.querySelectorAll(tag);
        html += ('<li>' + tag + ' has ' + tagCount[tag] + ' instances.');
    }
    html += '</ul>';
    tagResults.innerHTML = html;



    console.log(tagCount);

    
    // STEP 1: As above, get array of checkbox objects from form. 
    // STEP 2: Get HTML tag value associated with each checkbox object in the array you got in STEP 1, by looping.
    // STEP 3: Count number of times each HTML tag appears in index.html, by getting the tags (p, div, etc.) from STEP 2, and by using the document.querySelectorALL(tag)
    // STEP 4: Use the HTML tag value, and the number of times it appears to build/populate an empty object, tagCount with the HTML tag & number of times it appears as the
    // key/value pair.
    // STEP 5: Use tagCount to build a string <li> list items of the HTML tags, and number of times they appear
    // STEP 6: After figuring out how to build a string of list items of the tags and # of times in the document, insert the string into a <ul>.
    // STEP 7: After finish

    //var tag = tags[i].value;
    //var matches = document.querySelectorAll(tag);
    //var matchlist = [];
    //matchlist = matchlist.push(tag); 

    //for(i=0; i < tags.length; i++); something like this
    //tagCount[tag[i]] = matchlist[i]; assigns tag/matches to tagCount object
    
   
    
    
    // console.log('hello');
    // console.log(tags.length);
    
    
    return false;
};



