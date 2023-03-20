import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question } from '../../models/subQuiz.model';

@Component({
  selector: 'app-game-question',
  templateUrl: './GameQuestion.component.html',
  styleUrls: ['./GameQuestion.component.scss']
})
export class GameQuestionComponent implements OnInit {
  
  currentQuestion$: Question = {id:'', value: ''};

  constructor(private gameService: GameService) {
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion$ = question;
    });
  }

  ngOnInit() {
  }

}
