/* exported checkAboutMe, resetJSAnswers */

var form = document.getElementById('facts');
var results = document.getElementById('results');
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');

function checkAboutMe() {
    // eslint-disable-next-line
    console.log('checkAboutme called');

    var elements = form.elements;
    var mascot = elements.mascot.value;
    var date = elements.date.value;
    var box = document.getElementById('myschool');
    var school = box.options[box.selectedIndex].text;
    var checkBox1 = document.getElementById('state1');
    var checkBox2 = document.getElementById('state2');
    var checkBox3 = document.getElementById('state3');
    var dog1 = document.getElementById('dog1');
    var dog2 = document.getElementById('dog2');
    var dog3 = document.getElementById('dog3');
    var dog4 = document.getElementById('dog4');
    var dog5 = document.getElementById('dog5');

    console.log('school', school);
    console.log('mascot', mascot);
    console.log('date', date);

    var correct = 0;
    if(school === 'Duke'){
        correct = correct + 1;
    }

    if(mascot === 'blue devil'){
        correct = correct + 1;
    }

    if(date === 'Yes - how embarrassing!'){
        correct = correct + 1;
    }

    if(checkBox1.checked === true && checkBox2.checked === true && checkBox3.checked === true){
        correct = correct + 1;
    }

    if(dog1.checked === true && dog2.checked === true && dog3.checked === false && dog4.checked === false && dog5.checked === false){
        correct = correct + 1;
    }

    console.log('correct', correct);

    results.innerText = 'You got ' + correct + ' out of 5 correct.';

    submit.disabled = true;

    reset.disabled = false;

    return false;
}

function resetJSAnswers() {
    results.innerText = '';
    submit.disabled = false;
    reset.disabled = true;
}
