import { GameService } from './../../services/GameService';
import { Component, OnInit, Output } from '@angular/core';
@Component({
    selector: 'app-game-result',
    templateUrl: './GameResult.component.html',
    styleUrls: ['./GameResult.component.scss']
})
export class GameResultComponent implements OnInit {
    result: number;
    constructor(private gameService : GameService) {
      this.result = 0;
    }
    ngOnInit(): void {}
}
