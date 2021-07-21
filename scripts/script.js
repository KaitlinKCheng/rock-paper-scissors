// ***** Global Variables *****

// Possible shapes to play
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

// Possible results
const WIN = 'win';
const LOSE = 'lose';
const TIE = 'tie';

// Scores
let computerScore = 0;
let playerScore = 0;

const playTo = 5; // The score to play to

// Page elements
const computerShape = document.getElementById('catbot-shape');
const playerShape = document.getElementById('player-shape');
const resultText = document.getElementById('result-text');
const scoresText = document.getElementById('scores-text');
const shapeBtns = document.querySelectorAll('.shape-btn');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');


// ***** Setup *****
setup();

shapeBtns.forEach((btn) => {
    btn.addEventListener('click', playRound);
});


// ***** Functions *****

/**
 * Sets up the game by setting initial text.
 */
function setup() {
    resultText.textContent = 'Start by choosing one of the shapes!';
    scoresText.textContent = `Your score: ${playerScore} vs CatBot's score: ${computerScore}`;
}

/**
 * Plays one round of rock paper scissors. Determines the player's selection,
 * then compares it to the computer's to check for a winner. Updates the results
 * accordingly.
 *
 * @param {Event} e - The event that occurred.
 */
function playRound(e) {
    let playerSelection = playerPlay(e.target);
    let computerSelection = computerPlay();
    let result;

    // Immediate tie if shapes are the same
    if (playerSelection === computerSelection) {
        result = TIE;
    } else {
        // Check for win
        if ((playerSelection === ROCK && computerSelection === SCISSORS)
                || (playerSelection === PAPER && computerSelection === ROCK)
                || (playerSelection === SCISSORS && computerSelection === PAPER)) {
            result = WIN;
        } else {
            result = LOSE;
        }
    }

    updateChoices(result, playerSelection, computerSelection);
    updateResult(result);

    // End the game when someone reaches the max score
    if (playerScore === playTo || computerScore === playTo) {
        endGame();
    }
}

/**
 * Generates a random shape for the computer to play.
 *
 * @returns {string} The shape the computer plays.
 */
function computerPlay() {
    const shapes = [ROCK, PAPER, SCISSORS];
    return shapes[Math.floor(Math.random() * 3)];
}

/**
 * Determines the player's choice of shape based on the button they chose.
 *
 * @param {Object} btn - The button that was chosen.
 * @returns {string} The shape the player plays.
 */
function playerPlay(btn) {
    switch (btn) {
        case rockBtn:
            return ROCK;
        case paperBtn:
            return PAPER;
        case scissorsBtn:
            return SCISSORS;
    }
}

/**
 * Updates everyone's shape text & styles based on the result & chosen shapes.
 *
 * @param {string} result - The result of the round.
 * @param {string} playerSelection - The shape the player chose.
 * @param {string} computerSelection - The shape the computer chose.
 */
function updateChoices(result, playerSelection, computerSelection) {
    // Clear styles from previous round
    playerShape.classList.remove('win', 'lose', 'tie');
    computerShape.classList.remove('win', 'lose', 'tie');

    // Change the text to match the chosen shape
    playerShape.textContent = playerSelection;
    computerShape.textContent = computerSelection;

    // Add styles based on results
    switch (result) {
        case WIN:
            playerShape.classList.add('win');
            computerShape.classList.add('lose');
            break;
        case LOSE:
            playerShape.classList.add('lose');
            computerShape.classList.add('win');
            break;
        case TIE:
            playerShape.classList.add('tie');
            computerShape.classList.add('tie');
            break;
    }
}

/**
 * Uses the result to update the page's text and player & computer scores.
 *
 * @param {string} result - The result of the round.
 */
function updateResult(result) {
    switch (result) {
        case WIN:
            resultText.textContent = 'You win this round! CatBot beeps in defeat.';
            playerScore++;
            break;
        case LOSE:
            resultText.textContent = 'You lose this round! CatBot meows triumphantly.';
            computerScore++;
            break;
        case TIE:
            resultText.textContent = 'It\'s a tie! CatBot intensifies its focus.';
            break;
    }

    scoresText.textContent = `Your score: ${playerScore} vs CatBot's score: ${computerScore}`;
}

/**
 * Sets the game to inactive, then updates the page's text to display the
 * results of the game.
 */
function endGame() {
    if (playerScore === playTo || computerScore === playTo) {
        // Set game buttons to an inactive state
        shapeBtns.forEach((btn) => {
            btn.removeEventListener('click', playRound);
            btn.classList.add('game-over');
        });

        if (playerScore === playTo) {
            resultText.textContent = 'Game over! You beat CatBot.';
        } else {
            resultText.textContent = 'Game over! CatBot won this time.';
        }

        resultText.textContent += ' Refresh the page to play again!';
    }
}
