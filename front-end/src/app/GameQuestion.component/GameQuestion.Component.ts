import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question,Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';

@Component({
  selector: 'app-game-question',
  templateUrl: './GameQuestion.component.html',
  styleUrls: ['./GameQuestion.component.scss']
})
export class GameQuestionComponent implements OnInit {
  
  currentQuestion: Question = {id:'', value: '',label:"",answers: [] as Answer[]}; 
  constructor(private gameService: GameService) {
    this.gameService.AllQuestions$.subscribe((question: Question) => {
      this.currentQuestion = question;
    });
  }

  ngOnInit() {
    
  }

}
