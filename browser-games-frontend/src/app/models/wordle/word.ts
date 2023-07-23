export class Word {
    guess: Array<Letter>;

    constructor(solution: string) {
        this.guess = Array(solution.trim().length)
        for(let i = 0; i < this.guess.length; i++) {
            this.guess[i] =  new Letter()
        }
    }

    public checkSolution(solution: string) {
        for(let i = 0; i < this.guess.length; i++) {
            if(this.guess[i].letter == solution.charAt(i)){
                this.guess[i].state = LetterState.Correct
            } else if(solution.includes(this.guess[i].letter)) {
                //TODO - check number of correct letters
                this.guess[i].state = LetterState.WrongPosition
            } else {
                this.guess[i].state = LetterState.Incorrect
            }
        }
    }
}

class Letter {
    letter: string = ""
    state: LetterState = LetterState.InProgress
}

export enum LetterState {
    InProgress,
    Incorrect,
    WrongPosition,
    Correct
}
