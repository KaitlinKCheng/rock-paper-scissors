// Possible shapes to play
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

/**
 * Generates a random shape for the computer to play.
 *
 * @return {string}    The shape the computer plays.
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
