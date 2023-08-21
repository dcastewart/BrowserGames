import { Component, Input } from '@angular/core';
import { MSTile } from 'src/app/models/minesweeper/mstile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  @Input() msTile: MSTile = new MSTile(false)
}
