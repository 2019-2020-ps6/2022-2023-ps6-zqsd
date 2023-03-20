import { GameResultComponent } from './GameResult.component/GameResult.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamepageComponent } from './Gamepage.component/GamePage.Component';

@NgModule({
  declarations: [
    AppComponent,
    GamepageComponent,
    GameResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
