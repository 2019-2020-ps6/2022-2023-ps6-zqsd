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

@NgModule({
  declarations: [
    AppComponent,
    ParameterMusicComponent,
    ParameterSizeTextComponent,
    AdaptFontSizeDirective
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
