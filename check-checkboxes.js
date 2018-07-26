/* eslint-disable-next-line */
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
    var html = '<ul>';
    for(var key in tagCount) {
        console.log('key', key);
        console.log('again', tagCount[key]);
        html += '<li>' + key + tagCount[key] + '</li>';
    }
    html += '</ul>';
    console.log('html', html);
    var results = document.getElementById('results');
    results.innerHTML = html;
    return false;
}