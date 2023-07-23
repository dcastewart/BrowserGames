import { Component, Input } from '@angular/core';
import { Word } from 'src/app/models/wordle/word';
import { LetterState } from 'src/app/models/wordle/word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
  public get letterState(): typeof LetterState {
    return LetterState
  }

  @Input() word: Word = new Word("")

}
