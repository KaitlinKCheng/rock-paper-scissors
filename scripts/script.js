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
 * @returns {string} The constant WIN, LOSE, or TIE that reflects the player's result.
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

    return result;
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

/**
 * Plays a game of rock paper scissors using prompts and the console. Plays a
 * predetermined number of rounds, printing messages in the console for the
 * player.
 */
function game() {
    const numRounds = 5; // Number of rounds to play
    let playerScore = 0;
    let computerScore = 0;

    console.log(`Time to play rock, paper, scissors! Number of rounds to play is set to: ${numRounds}.`);

    for (let i = 0; i < numRounds; i++) {
        let playerSelection = prompt('Pick a shape: [rock], [paper], or [scissors].');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        // Generate result message
        if (result === WIN) {
            console.log(`You win! ${capitalize(playerSelection)} beats ${computerSelection}.`);
            playerScore++;
        } else if (result === LOSE) {
            console.log(`You lose! ${capitalize(computerSelection)} beats ${playerSelection}.`);
            computerScore++;
        } else {
            console.log(`It's a tie! You and the computer both chose ${playerSelection}.`);
        }

        console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
    }

    if (playerScore > computerScore) {
        console.log(`Congratulations, you won!`);
    } else if (playerScore < computerScore) {
        console.log(`Oh no, you lost!`);
    } else {
        console.log(`You tied with the computer! You're both winners this time!`);
    }

    console.log(`Final scores:`);
    console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}.`);
}


// Start game
const startGame = document.getElementById('start-game');
startGame.addEventListener('click', game);
