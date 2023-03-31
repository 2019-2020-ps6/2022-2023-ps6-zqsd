import { GameResultComponent } from './GameResult.component/GameResult.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamepageComponent } from './Gamepage.component/GamePage.Component';
import { GameQuestionComponent } from './GameQuestion.component/GameQuestion.Component';
import { GameAnswerComponent } from './GameAnswer.component/GameAnswer.Component';
import { GameQuizComponent } from './GameQuiz.component/GameQuiz.component';
import { HeaderComponent } from './header.component/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import {CreateQuiz} from "./CreateQuiz.component/CreateQuiz.component";
import {CreateQuestion} from "./CreateQuestion.component/CreateQuestion.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    GamepageComponent,
    GameQuestionComponent,
    GameAnswerComponent,
    GameResultComponent,
    GameQuizComponent,
    HeaderComponent,
    HomePageComponent,
    CreateQuiz,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
