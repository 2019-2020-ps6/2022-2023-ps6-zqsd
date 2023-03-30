import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParameterPageComponent } from './Parameter/ParameterPage.component/ParameterPage.component';

const routes: Routes = [
  { path: '**', component: ParameterPageComponent } //mettre page d'acceuil
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
