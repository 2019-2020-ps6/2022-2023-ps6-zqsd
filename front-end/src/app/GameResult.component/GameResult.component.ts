import { GameService } from './../../services/GameService';
import { Component, OnInit, Output } from '@angular/core';
import { AnswerClassic1 } from 'src/mocks/question.mock';

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

  ngOnInit(): void {
      this.gameService.answerResult$.subscribe((isCorrect: boolean|undefined) => {
          if (isCorrect) {
              this.score++;
          }
      });
  }

  getScore(): number {
      return this.score;
  }

  endGame(): void {
      this.result = 'Votre score est ' + this.score;
  }
}
