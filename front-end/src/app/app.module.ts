import { GameResultComponent } from './GameResult.component/GameResult.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from "@angular/cdk/drag-drop";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamepageComponent } from './Gamepage.component/GamePage.Component';
import { GameQuestionComponent } from './GameQuestionClassical.component/GameQuestionClassical.Component';
import { GameAnswerComponent } from './GameAnswer.component/GameAnswer.Component';
import { GameQuizComponent } from './GameQuiz.component/GameQuiz.component';
import { HeaderComponent } from './header.component/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import {CreateQuiz} from "./CreateQuiz.component/CreateQuiz.component";
import {CreateQuestion} from "./CreateQuestion.component/CreateQuestion.component";
import {ReactiveFormsModule} from "@angular/forms";
import {PuzzleAnswerComponent} from "./Puzzle/PuzzleAnswer/PuzzleAnswer.component";
import {PuzzleGridComponent} from "./Puzzle/PuzzleGrid/PuzzleGrid.component";
import {MainPuzzleComponent} from "./Puzzle/PuzzleMain/PuzzleMain.component";
import { ResultsComponent } from './results/results.component';
import { GameQuestionOrderComponent } from './GameQuestionOrder.component/GameQuestionOrder.component';



@NgModule({
  declarations: [
    AppComponent,
    GamepageComponent,
    GameQuestionComponent,
    GameQuestionOrderComponent,
    GameAnswerComponent,
    GameResultComponent,
    GameQuizComponent,
    HeaderComponent,
    HomePageComponent,
    CreateQuiz,
    PuzzleAnswerComponent,
    PuzzleGridComponent,
    MainPuzzleComponent,
    ResultsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
