/**
 * Generates a random shape for the computer to play.
 *
 * @return {string}    The shape the computer plays.
 */
 function computerPlay() {
    let randomShape = Math.floor(Math.random() * 3) + 1;

    if (randomShape === 1) {
        return 'rock';
    } else if (randomShape === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
