import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question,Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';

@Component({
  selector: 'app-game-question-classical',
  templateUrl: './GameQuestionClassical.component.html',
  styleUrls: ['./GameQuestionClassical.component.scss']
})
export class GameQuestionComponent implements OnInit {
  
  currentQuestion: Question = {id:'', value: '',label:"",answers: [] as Answer[]}; 
  constructor(private gameService: GameService) {
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion = question;
      
    })
  }

  questionAnswered(goodAnswer:boolean){
    console.log(goodAnswer);  //quand on aura le back remplacer cette fonction
    this.getNextQuestion();
  }
  
  getNextQuestion(){
    this.gameService.nextQuestion();

  } 
  ngOnInit() {
    
  }

}
