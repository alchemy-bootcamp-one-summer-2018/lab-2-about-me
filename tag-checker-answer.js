/* exported tagCounter */


var tagCounter = function(){
    var tags = document.querySelectorAll('input[name=tags]:checked');
    var tagCount = {};
    var html = '<ul>';
    var i;
    var tag;
    for(i = 0; i < tags.length; i++){
        tag = tags[i].value;
        var matches = document.querySelectorAll(tag);
        tagCount[tag] = matches.length;
        console.log('tag count', tagCount[tag]);
    }
    for(i = 0; i < tags.length; i++){
        tag = tags[i].value;
        html += ('<li>' + tag + ' has ' + tagCount[tag] + ' instances.');
    }
    html += '</ul>';
    var tagResults = document.getElementById('tag-results');
    tagResults.innerHTML = html;
    console.log(tagResults);
    return false;
};



