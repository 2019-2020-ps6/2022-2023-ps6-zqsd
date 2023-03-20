import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamepageComponent } from "./Gamepage.component/GamePage.Component";


const routes: Routes = [
  { 
    path: "Gamepage",
    component: GamepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]

})
export class AppRoutingModule {
 }
