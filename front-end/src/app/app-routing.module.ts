import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParameterPageComponent } from './Parameter/ParameterPage.component/ParameterPage.component';
import { MainAdvancedParamterComponent } from './AdvancedParamter/MainAdvancedParameter/MainAdvancedParameter.component';
import { MemoryWorkAdvancedParameterComponent } from './AdvancedParamter/MemoryWork/MemoryWorkAdvancedParameter.component';

import { GamepageComponent } from "./Gamepage.component/GamePage.Component";
import { GameResultComponent } from "./GameResult.component/GameResult.component";
import { HomePageComponent } from "./home-page/home-page.component";
import {CreateQuiz} from "./CreateQuiz.component/CreateQuiz.component";
import {MainPuzzleComponent} from "./Puzzle/PuzzleMain/PuzzleMain.component";
import {ResultsComponent} from "./results/results.component";


const routes: Routes = [
  {
    path: "Gamepage",
    component: GamepageComponent },
  {
    path: "GameResult",
    component: GameResultComponent },

  { path: '', redirectTo: '/homePage', pathMatch: 'full' },

  { path: 'homePage', component: HomePageComponent },

  {path: 'CreateQuiz', component: CreateQuiz},

  { path: 'MainPuzzle', component: MainPuzzleComponent },

  { path: 'results', component: ResultsComponent },


  { path: '**', component: ParameterPageComponent }, //mettre page d'acceuil
  { path: 'AdvancedParameterMainPage', component: MainAdvancedParamterComponent },
  { path: 'ParameterPage', component: ParameterPageComponent },
  { path: 'MemoryWork', component: MemoryWorkAdvancedParameterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
 }
