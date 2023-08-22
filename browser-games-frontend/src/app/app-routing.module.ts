import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordleComponent } from './components/wordle/wordle.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MinesweeperComponent } from './components/minesweeper/minesweeper.component';

const routes: Routes = [
  { path: 'wordle', component: WordleComponent },
  { path: 'minesweeper', component: MinesweeperComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
