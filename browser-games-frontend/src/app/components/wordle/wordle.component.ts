import { Component } from '@angular/core';
import { Word } from 'src/app/models/wordle/word';

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.css']
})
export class WordleComponent {
  private solution: string = "words"

  guesses: Array<Word> = Array(6)
  private currentIndex: number = 0

  ngOnInit() {
    for(let i = 0; i < this.guesses.length; i++) {
      this.guesses[i] = new Word(this.solution)
    }
    this.guesses[0].guess[0].letter = 'w'
    this.guesses[0].guess[1].letter = 'h'
    this.guesses[0].guess[2].letter = 'o'
    this.guesses[0].guess[3].letter = 'l'
    this.guesses[0].guess[4].letter = 'e'
    this.guesses[0].checkSolution("words")
  }

}
