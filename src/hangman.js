// Class syntax
class Hangman {

    // Initialization
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    };

    // Game state
    calculateStatus() {
        // check to see if every letter in the word array is in the guessedLetters array.
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' '); 

        if (this.remainingGuesses === 0) {
            this.status = 'failed!';
        } else if (finished) {
            this.status = 'finished!';
        } else {
            this.status = 'playing';
        };
    };

    // Status message
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`;
        } else if (this.status === 'failed!') {
            return `Nice try! The word was ${this.word.join('')}.`;
        } else {
            return 'Great work! You guessed the word.';
        };
    };

    // Generate puzzle
    get puzzle() {
        let puzzle = '';

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            };
        });
        return puzzle;
    };

    // User guesses
    makeGuess(guess) {
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        // break out statement: If this executes, the rest of the code will not run.
        if (this.status !== 'playing') { 
            return;
        };

        if (isUnique) {
            this.guessedLetters = [...this.guessedLetters, guess]; // spread syntax
        };

        if (isUnique && isBadGuess) {
            this.remainingGuesses--;
        };
        this.calculateStatus();
    };
};

export {Hangman as default};