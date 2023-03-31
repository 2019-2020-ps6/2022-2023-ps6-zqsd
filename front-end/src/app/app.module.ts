import { GameResultComponent } from './GameResult.component/GameResult.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamepageComponent } from './Gamepage.component/GamePage.Component';
import { GameQuestionComponent } from './GameQuestionClassical.component/GameQuestionClassical.Component';
import { GameAnswerComponent } from './GameAnswer.component/GameAnswer.Component';
import { GameQuizComponent } from './GameQuiz.component/GameQuiz.component';
import { HeaderComponent } from './header.component/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GamepageComponent,
    GameQuestionComponent,
    GameAnswerComponent,
    GameResultComponent,
    GameQuizComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
