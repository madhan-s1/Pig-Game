'use script';

// assigning variable:
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const score0El = document.querySelector('#score--0');
const socre1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore, activePlayer, score, playing;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  playing = true;

  diceEl.classList.add('hidden');

  score0El.textContent = 0;
  socre1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};
init();

// switching the player
const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll dice button
btnRoll.addEventListener('click', function () {
  if (playing) {
    // adding random number
    let dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    if (dice !== 1) {
      currentScore += dice;
      console.log(currentScore);
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//  hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', init);
