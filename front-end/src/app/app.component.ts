import { Component } from '@angular/core';
import { GamepageComponent } from './Gamepage.component/GamePage.Component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Hello world!';
}
