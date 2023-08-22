import { Component } from '@angular/core';
import { MineField } from 'src/app/models/minesweeper/mineField';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.css']
})
export class MinesweeperComponent {
  mineField: MineField = new MineField(20, 20, 10)
}
