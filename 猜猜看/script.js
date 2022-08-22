'use strict';
//dom
console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Correct Number!';
//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 20;
//document.querySelector('.guess').value = 13;
//获得随机数
let number = Math.trunc(Math.random() * 20 + 1);
//document.querySelector('.number').textContent = number;
//console.log(number);
let score = 20;
let hscore = 0;
//事件监听器
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(guess);
    23
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';


    } else if (guess == number) {
        document.querySelector('.message').textContent = '正确!';
        document.querySelector('.number').textContent = number;
        changeBackgroundColor();
        if (hscore < score) {
            hscore = score;
            document.querySelector('.highscore').textContent = hscore;
        }
    } else if (guess < number) {
        document.querySelector('.message').textContent = '太小！';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess > number) {
        document.querySelector('.message').textContent = '太大！';
        score--;
        document.querySelector('.score').textContent = score;
    }
    if (score <= 0) {
        document.querySelector('.message').textContent = '失败！';
    }
});
//dom改变css
function changeBackgroundColor() {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
}
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    number = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});