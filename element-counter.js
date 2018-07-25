/*exported countTags*/
function countTags() {
    var tags = document.querySelectorAll('input[name=tags]:checked');
    console.log('function works');
    console.log(tags);
    var tagCount = {};
    var html = '<ul>';

    for(var i = 0; i < tags.length; i++) {
        console.log('tag value', tags[i].value);
        var tag = tags[i].value;
        var matches = document.querySelectorAll(tag);
        console.log('match length', matches.length);
        tagCount[tag] = matches.length;
        console.log('tag count', tagCount);
    }

    for(var x = 0; x < tags.length; x++) {
        var key = Object.keys(tagCount)[x];
        var value = tagCount[key];
        html += `<li> ${key} ${value} <li>`;
        console.log('value', value);
    }

    html += '</ul>';
    var element = document.getElementById('results');
    element.innerHTML = html + 'dont everyone thank me at once!';
    console.log('element is called');

    return false;
}
