let min = 22, max = 46;
let winningNumber = 34, totalChances = 3;

const game = document.querySelector('#game');
const guessNumber = document.querySelector('#guess-number');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
        guessNumber.value = '';
    }
});
guessBtn.addEventListener('click', function (e) {
    let guess = parseInt(guessNumber.value);
    if (guess > max || guess < min || isNaN(guess)) {
        setMessage(`Please Enter  a Number Between ${min} and ${max}`, 'red');
    }
    if (guess === winningNumber) {
        // guessNumber.style.borderColor = 'green';
        // guessNumber.disabled = true;
        // setMessage(`You WIN, You've entered a correct Number ${winningNumber}`, 'green');
        gameOver(true, `You WIN, ${winningNumber} is Correct Number`);
    }
    else {
        totalChances -= 1;
        if (totalChances === 0) {
            // guessNumber.disabled = true;
            // setMessage(`You Have Lost The Game,  The Correct Number Was ${winningNumber}`, 'red');
            gameOver(false, `Game Over, Correct Number was ${winningNumber}`);
        }
        else {
            guessNumber.value = '';
            guessNumber.style.borderColor = 'red';
            setMessage(`Wrong Number, You have ${totalChances} Left`, 'red');
        }
    }
});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    won === true ? color = 'green' : color = 'red';

    guessNumber.style.borderColor = color;
    guessNumber.disabled = true;
    message.style.color = color;
    message.textContent = msg;

   // setMessage(msg);
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}