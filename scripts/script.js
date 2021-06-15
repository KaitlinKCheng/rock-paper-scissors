// Possible shapes to play
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

// Possible results
const WIN = 'win';
const LOSE = 'lose';
const TIE = 'tie';


/**
 * Generates a random shape for the computer to play.
 *
 * @returns {string} The shape the computer plays.
 */
function computerPlay() {
    let randomShape = Math.floor(Math.random() * 3) + 1;

    if (randomShape === 1) {
        return ROCK;
    } else if (randomShape === 2) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

/**
 * Plays one round of rock paper scissors. Checks the player and computer
 * selections to determine a winner.
 *
 * @param {string} playerSelection - The shape the player chooses to play.
 * @param {string} computerSelection - The shape the computer chooses to play.
 * @returns {string} A message describing the winner of this round.
 */
function playRound(playerSelection, computerSelection) {
    let result;

    // Ignore letter case
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        result = TIE;
    } else {
        result = LOSE; // Assume loss

        // Check for win
        if ((playerSelection === ROCK)
                && (computerSelection === SCISSORS)) {
            result = WIN;
        } else if ((playerSelection === PAPER)
                && (computerSelection === ROCK)) {
            result = WIN;
        } else if ((playerSelection === SCISSORS)
                && (computerSelection === PAPER)) {
            result = WIN;
        }
    }

    // Generate result message
    if (result === WIN) {
        return `You win! ${capitalize(playerSelection)} beats ${computerSelection}.`;
    } else if (result === LOSE) {
        return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`;
    } else {
        return `It's a tie! You and the computer both chose ${playerSelection}.`;
    }
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} string - The string to capitalize.
 * @returns {string} The capitalized string.
 */
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}
