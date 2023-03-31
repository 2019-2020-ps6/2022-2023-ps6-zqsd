import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question,Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';

/*
gameQuestion -> puzzlemain
-> puzzleanswer
-> puzzlegrid
if puzzleanswer -> position to -> puzzlemain
if all right : puzzlemain -> gameQuestion
*/

@Component({
  selector: 'app-game-question',
  templateUrl: './GameQuestion.component.html',
  styleUrls: ['./GameQuestion.component.scss']
})
export class GameQuestionComponent implements OnInit {

  currentQuestion: Question = {id:'', value: '',label:"",answers: [] as Answer[]};
  constructor(private gameService: GameService) {
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion = question;

    })
  }

  questionAnswered(goodAnswer:boolean){
    console.log(goodAnswer);
    this.getNextQuestion();
  }

  getNextQuestion(){
    this.gameService.nextQuestion();
    console.log();

  }
  ngOnInit() {

  }

}
