/* exported countElements */

function countElements() {

    console.log('I work');

    var tags = document.querySelectorAll('input[name=tags]:checked');
    var tagCount = {};
    var html = '<ul>';

    for(var i = 0; i < tags.length; i++){
        var tag = tags[i].value;
        tagCount[tag] = document.querySelectorAll(tag).length;
        console.log(tagCount);
    }
    for(var key in tagCount){
        html += `<li>${key} ${tagCount[key]}</li>`;
    }

    html += ('</ul>');
    document.getElementById('elements-results').innerHTML = html;

    return false;
}


