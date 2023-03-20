import { GameService } from './../../services/GameService';
import { Component, OnInit, Output } from '@angular/core';
import { AnswerClassic1 } from 'src/mocks/subQuizz.mock';
@Component({
    selector: 'app-game-result',
    templateUrl: './GameResult.component.html',
    styleUrls: ['./GameResult.component.scss']
})
export class GameResultComponent implements OnInit {
    score: number;
    result: string;

    constructor(private gameService: GameService) {
      
      this.score = 0;
      this.result = '';
    }
    ngOnInit(): void {}
}
