'use strict';

function changePlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    socres[activePlayer] += currentScore;
    score0.textContent = socres[0];
    score1.textContent = socres[1];

    if (socres[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('win');
        player0.classList.remove('player--active0');
        player1.classList.remove('player--active1');
        dice.classList.add('hidden');
        playing = false;
        return;
    }
    activePlayer = activePlayer === 0 ? 1 : 0;

    //存在则删除class，不存在添加class
    player0.classList.toggle('player--active0');
    player1.classList.toggle('player--active1');



    currentScore = 0;
}
//选择元素
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const currentS0 = document.getElementById('current--0');
const currentS1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const socres = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let playing = true;

btnRoll.addEventListener('click', function() {
    if (playing) {
        let numOfDice = Math.trunc(Math.random() * 6) + 1;
        console.log(numOfDice);
        dice.classList.remove('hidden');
        dice.src = `dice-${numOfDice}.png`;
        if (numOfDice !== 1) {
            currentScore = currentScore + numOfDice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            currentScore = 0;
            changePlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (playing)
        changePlayer();
});

btnNew.addEventListener('click', function() {
    socres[0] = 0;
    socres[1] = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    currentS0.textContent = 0;
    currentS1.textContent = 0;
    dice.classList.add('hidden');
    player0.classList.remove('win');
    player0.classList.add('player--active0');
    player1.classList.remove('win');
    player1.classList.remove('player--active1');
    currentScore = 0;
    activePlayer = 0;
    playing = true;
});