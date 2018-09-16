import Hangman from './hangman';
import getPuzzle from './requests';

const puzzleElement = document.querySelector('#puzzle');
const guessesElement = document.querySelector('#guesses');
const userInputElement = document.querySelector('#userInput');

let game;

// Keyboard Listener for user input
userInputElement.addEventListener('input', (event) => {
  const guess = userInputElement.value.toLowerCase();
  console.log(guess);
  game.makeGuess(guess);
  render();
  userInputElement.value = '';
});

// GUI for game
const render = () => {
  puzzleElement.innerHTML = '';
  guessesElement.textContent = game.statusMessage;

  game.puzzle.split('').forEach((letter) => {
    const letterElement = document.createElement('span');
    letterElement.textContent = letter;
    puzzle.appendChild(letterElement);
  });
};

// Create game
const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game = new Hangman(puzzle, 5);
  render();
};

// Reset game
document.querySelector('#reset').addEventListener('click', (event) => {
  startGame();
  userInputElement.focus();
});

startGame();
