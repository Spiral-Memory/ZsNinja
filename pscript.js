'use strict';
//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
btnRoll.addEventListener('click', function () {
    if (playing) {

        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove('hidden');
        if (dice != 1) {
            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        }
        else {
            switchPlayer();

        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {

        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 50) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }
        else {
            switchPlayer();

        }
    }

})

btnNew.addEventListener('click',function(){
  if(diceEl.classList.contains('hidden'))
  {
      // Do nothing
  }
  else {
    diceEl.classList.add('hidden');
  }
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    activePlayer = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    playing = true;
    current0El.textContent = "0";
    current1El.textContent = "0";
    score0El.textContent = "0";
    score1El.textContent = "0";


})
