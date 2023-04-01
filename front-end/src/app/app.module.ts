import { GamepageComponent } from './Gamepage.component/GamePage.Component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
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
    GamepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
