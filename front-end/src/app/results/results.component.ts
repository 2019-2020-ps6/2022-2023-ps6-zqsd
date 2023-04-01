import { Component } from '@angular/core';
import { GameService } from '../../services/GameService';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {


  constructor(public gameService: GameService) {
  }
}

