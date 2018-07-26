/* exported countTags */

function countTags(event) {

    event.preventDefault();
    console.log('function is running');

    var tags = document.querySelectorAll('input[name=tags]:checked');
    var tagCount = {};

    for(var i = 0; i < tags.length; i++){
        var tag = tags[i].value;
        tagCount[tag] = document.querySelectorAll(tag).length;
    }

    console.log(tagCount);

    var html = '<ul>';

    for(var key in tagCount) {
        html += `<li> ${key} ${tagCount[key]} </li>`;
    }
    html += '</ul>';
    console.log(html);

    var tag_results = document.getElementById('tag-results');
    tag_results.innerHTML = html;
}