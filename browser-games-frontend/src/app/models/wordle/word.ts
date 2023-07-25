export class Word {
    guess: Array<Letter>;

    constructor(solution: string) {
        this.guess = Array(solution.trim().length)
        for(let i = 0; i < this.guess.length; i++) {
            this.guess[i] =  new Letter()
        }
    }

    public checkSolution(solution: string) {
        solution = solution.toUpperCase()
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

    public typeLetter(newLetter: string){
        for(let i = 0; i < this.guess.length; i++){
            if(this.guess[i].letter == ""){
                console.log(this.guess[i].letter)
                console.log(newLetter)
                this.guess[i].letter = newLetter
                return
            }
        }
    }

    public deleteLetter() {
        for(let i = this.guess.length - 1; i >= 0; i--) {
            if(this.guess[i].letter != "") {
                this.guess[i].letter = ""
                return
            }
        }
    }

    public isValid(): boolean {
        if(this.guess[this.guess.length - 1].letter == ""){
            return false
        } else {
            return true
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
