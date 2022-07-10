
const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow', 'brown', 'black'];

function runGame() {
    let guess = "";
    let correct = false;
    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];
    let numTries = 0;
    console.log(target);

    do {
        guess = prompt(`I am thinking of one of these colors\n\n${COLORS_ARRAY.join(', ')}\n\nWhat color am I thinking of?\n`);
        if (guess === null) {
            alert('This game has been aborted.');
            return;
        }
        numTries += 1;
        correct = checkGuess(guess, target);
    } while (!correct);

    document.getElementById("header").style.background = guess;
    document.getElementById("headerTwo").style.color = guess;


    alert(`Congratulastions! You have guessed the color\n\nIt took you ${numTries} guesses to finish the game!\n\nHit OK to see the color in the background.`);
}

function checkGuess(guess, target) {
    let correct = false;
    if (COLORS_ARRAY.indexOf(guess) === -1) {
        alert("Sorry, I don't recongnize your color\n\nPlease try again.\n");
    } else if (guess > target) {
        alert("Sorry, you guess is incorrect.\n\nHint: Your color is alphabeticlly higher than mine.\n\nPlease try again.");
    } else if (guess < target) {
        alert("Sorry, you guess is incorrect.\n\nHint: Your color is alphabeticlly lower than mine.\n\nPlease try again.");
    } else {
        correct = true;
    }
    return correct;
}
