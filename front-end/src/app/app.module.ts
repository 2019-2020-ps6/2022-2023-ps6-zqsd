import { GameResultComponent } from './GameResult.component/GameResult.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParameterMusicComponent } from './Parameter/ParameterMusic/ParameterMusic.component';
import { ParameterSizeTextComponent } from './Parameter/ParameterSizeText/ParameterSizeText.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdaptFontSizeDirective } from './directives/adaptFontSize';
import { MainAdvancedParamterComponent } from './AdvancedParamter/MainAdvancedParameter/MainAdvancedParameter.component'
import { ChronometerAdvancedParameterComponent } from './AdvancedParamter/Chronometer/Chronometer.component'
import { MemoryWorkAdvancedParameterComponent } from './AdvancedParamter/MemoryWork/MemoryWorkAdvancedParameter.component';
import { FocusWorkAdvancedParameterComponent } from './AdvancedParamter/FocusWork/FocusWorkAdvancedParameter.component';
import { ReturnButtonComponent } from './Parameter/Return/returnButton.component';
import { ParameterPageComponent } from './Parameter/ParameterPage.component/ParameterPage.component';
import { ButtonNavigationAdvancedParameter } from './Parameter/ButtonNavigationAdvancedParameter/ButtonNavigationAdvancedParameter.component';

import { HttpClientModule } from '@angular/common/http';
import { GamepageComponent } from './Gamepage.component/GamePage.Component';
import { GameQuestionComponent } from './GameQuestionClassical.component/GameQuestionClassical.Component';
import { GameQuestionSearchingComponent } from './GameQuestionSearching.component/GameQuestionSearching.Component';
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
import { QuizzListComponent } from './quizz-list/quizz-list.component';
import { PopUpComponent } from './PopUp/PopUp.component';
import { MatDialogModule } from '@angular/material/dialog';
import {ConnexionComponent} from "./Connexion/Connexion.component";
import {InscriptionComponent} from "./Inscription/Inscription.component";
import {ForgetPasswordComponent} from "./ForgetPassword/ForgetPassword.component";
import {RetrievePasswordComponent} from "./RetrievePassword/RetrievePassword.component";
import {PopUpDeleteQuizComponent} from "./popUpDeleteQuiz/popUpDeleteQuiz.component";
import {UserListComponent} from "./listUser/listUser.component";



@NgModule({
  declarations: [
    InscriptionComponent,
    AppComponent,
    ParameterMusicComponent,
    ParameterSizeTextComponent,
    AdaptFontSizeDirective,
    MainAdvancedParamterComponent,
    ChronometerAdvancedParameterComponent,
    MemoryWorkAdvancedParameterComponent,
    FocusWorkAdvancedParameterComponent,
    ReturnButtonComponent,
    ParameterPageComponent,
    ButtonNavigationAdvancedParameter,
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
    QuizzListComponent,
    GameQuestionSearchingComponent,
    PopUpComponent,
    ConnexionComponent,
    CreateQuestion,
    ForgetPasswordComponent,
    RetrievePasswordComponent,
    PopUpDeleteQuizComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
