import { GameResultComponent } from './GameResult.component/GameResult.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamepageComponent } from './Gamepage.component/GamePage.Component';
import { GameQuestionComponent } from './GameQuestion.component/GameQuestion.Component';
import { GameAnswer_Component } from './GameAnswer.component/GameAnswer.Component';

@NgModule({
  declarations: [
    AppComponent,
    GamepageComponent,
    GameQuestionComponent,
    GameAnswer_Component,
    GameResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
