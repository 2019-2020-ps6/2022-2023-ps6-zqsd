import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamepageComponent } from "./Gamepage.component/GamePage.Component";
import { GameResultComponent } from "./GameResult.component/GameResult.component";
import { HomePageComponent } from "./home-page/home-page.component";
import {CreateQuiz} from "./CreateQuiz.component/CreateQuiz.component";


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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]

})
export class AppRoutingModule {
 }
