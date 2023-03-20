import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Answer } from 'src/models/subQuiz.model';

@Component({
    selector: 'app-GameAnswer',
    templateUrl: './GameAnswer.Component.html',
    styleUrls: ['./GameAnswer.Component.scss']
})

export class GameAnswer_Component implements OnInit {

  currentAnswer$: Answer = {label:'', value:'', isCorrect: undefined, order: undefined};

  constructor(private gameService: GameService) {
    this.gameService.currentAnswer$.subscribe((answer: Answer) => {
      this.currentAnswer$ = answer;
    });
  }
    ngOnInit(): void {}
}

