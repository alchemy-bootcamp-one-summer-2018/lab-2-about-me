/* exported checkElementCounter */
function checkElementCounter() {

    var tagCount = {};
    var tags = document.querySelectorAll('input[name=tags]:checked');
    console.log(tags.length);
    var html = '<ul>';

    for(var i = 0; i < tags.length; i++) {
        console.log('hey!');
        var tag = tags[i].value;
        var matches = document.querySelectorAll(tag);
        console.log(tag);
        console.log(matches);
        tagCount[tag] = matches.length;
    }

    for(var j = 0; j < tags.length; j++) {
        console.log(tagCount);
        var key = Object.keys(tagCount)[j];
        html += `<li>${key} ${tagCount[key]}</li>`;
    }

    html += '</ul>';
    var elementResults = document.getElementById('results');
    elementResults.innerHTML = html;
    console.log('checkElementCounter called.');

    return false;
}