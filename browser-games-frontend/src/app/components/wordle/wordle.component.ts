import { Component, HostListener } from '@angular/core';
import { LetterState, Word } from 'src/app/models/wordle/word';

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.css'],
})
export class WordleComponent {
  private solution: string = 'words';

  guesses: Array<Word> = Array(6);
  private currentIndex: number = 0;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.key == 'Enter') {
      this.submitGuess();
    }
  }

  ngOnInit() {
    for (let i = 0; i < this.guesses.length; i++) {
      this.guesses[i] = new Word(this.solution);
    }
    this.guesses[0].guess[0].letter = 'w';
    this.guesses[0].guess[1].letter = 'h';
    this.guesses[0].guess[2].letter = 'o';
    this.guesses[0].guess[3].letter = 'l';
    this.guesses[0].guess[4].letter = 'e';
    this.submitGuess();
    this.submitGuess();
  }

  submitGuess() {
    this.guesses[this.currentIndex].checkSolution(this.solution);
    this.currentIndex++;
    this.guesses[this.currentIndex].guess.forEach((value) => {
      if (value.state != LetterState.Correct) {
        if (this.currentIndex >= this.guesses.length) {
          this.defeat();
          return;
        }
        return;
      }
    });
    this.victory();
  }

  victory() {
    console.log('Victory');
  }

  defeat() {
    console.log('Defeat');
  }
}
