import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleComponent } from './components/wordle/wordle.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LetterComponent } from './components/wordle/letter/letter.component';

@NgModule({
  declarations: [
    AppComponent,
    WordleComponent,
    HomeComponent,
    PageNotFoundComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
