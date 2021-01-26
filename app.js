// import functions and grab DOM elements
import { setThreePokemon } from './utils.js';
import { clearGame } from './localStorageUtils.js';

const playAgainButton = document.getElementById('play-again');


setThreePokemon();
// initialize state

// set event listeners to update state and DOM


playAgainButton.addEventListener('click', () => {
    clearGame();
    setThreePokemon();
});