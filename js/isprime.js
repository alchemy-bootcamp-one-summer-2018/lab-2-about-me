/* exported isPrime */

function isPrime() {
    console.log('function is running');
    var number = document.getElementById('prime_guess').value;
    var guessResult = document.getElementById('prime-results');

    for(var i = 2; i < number; i++){
        if(number % i === 0){
            document.getElementById('prime-results').classList.remove('prime');
            guessResult.innerText = `Not prime. One of the factors of ${number} is ${i}.`;
            break;
        }
        document.getElementById('prime-results').classList.add('prime');
        guessResult.innerText = 'Prime!';
    }
    console.log(number);
    return false;
}