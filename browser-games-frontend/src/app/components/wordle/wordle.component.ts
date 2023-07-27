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
    else if(event.key == 'Backspace'){
      this.guesses[this.currentIndex].deleteLetter()
    }
    else if((event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z')){
      this.guesses[this.currentIndex].typeLetter(event.key.toUpperCase())
    }  
  }

  ngOnInit() {
    for (let i = 0; i < this.guesses.length; i++) {
      this.guesses[i] = new Word(this.solution);
    }
  }

  submitGuess() {
    if(!this.guesses[this.currentIndex].isValid()) return;
    
    this.guesses[this.currentIndex].checkSolution(this.solution);
    let isVictory: boolean = true
    this.guesses[this.currentIndex].guess.forEach((value) => {
      if (value.state != LetterState.Correct) {
        isVictory = false
      }
    });
    this.currentIndex++;
    if(isVictory) this.victory()
    else if (this.currentIndex >= this.guesses.length) {
      this.defeat();
    }
  }

  victory() {
    console.log('Victory');
  }

  defeat() {
    console.log('Defeat');
  }
}
