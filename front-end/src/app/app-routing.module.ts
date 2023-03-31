import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParameterPageComponent } from './Parameter/ParameterPage.component/ParameterPage.component';
import { MainAdvancedParamterComponent } from './AdvancedParamter/MainAdvancedParameter/MainAdvancedParameter.component';
import { MemoryWorkAdvancedParameterComponent } from './AdvancedParamter/MemoryWork/MemoryWorkAdvancedParameter.component';

const routes: Routes = [
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
export class AppRoutingModule { }
