import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamepageComponent } from "./Gamepage.component/GamePage.Component";
import { GameResultComponent } from "./GameResult.component/GameResult.component";


const routes: Routes = [
  {
    path: "Gamepage",
    component: GamepageComponent },
    {
      path: "GameResult",
      component: GameResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]

})
export class AppRoutingModule {
 }
