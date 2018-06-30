let min = 1, max = 10, winningNumber = 6, guessLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-number'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
        guessInput.value = '';
    }
});

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please provide number between ${min} and ${max}`, 'red');
    }
    if (guess === winningNumber) {
        // guessInput.disabled = true; 
        // guessInput.style.borderColor = 'green';
        // setMessage(`${winningNumber} is a correct number, You WIN!`, 'green');
        gameOver(true, `${winningNumber} is a correct number, You WIN!`);
    }
    else {
        guessLeft -= 1;
        if (guessLeft === 0) {
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // setMessage(`Game Over You Lost The Correct Number Was ${winningNumber}`, 'red');
            gameOver(false, `Game Over You Lost the Game, Correct Number Was ${winningNumber}`);

        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct. You have ${guessLeft}`, 'red');
        }
    }
});

function setMessage(msg, color) {

    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;

    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}