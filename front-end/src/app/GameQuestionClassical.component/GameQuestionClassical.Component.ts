import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question,Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';

@Component({
  selector: 'app-game-question-classical',
  templateUrl: './GameQuestionClassical.component.html',
  styleUrls: ['./GameQuestionClassical.component.scss']
})


export class GameQuestionComponent implements OnInit {
  
  @Input() currentQuestion: Question|undefined;
  showResult =false;

  constructor(private gameService: GameService) {
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion = question;
      
    })
  }

  questionAnswered(goodAnswer:boolean){
    if (goodAnswer) {
      this.gameService.score.goodAnswers++;
    } else {
      this.gameService.score.badAnswers++;
    }
    if (this.gameService.allQuestionsAnswered()) {
      this.showResult = true;
    } else {
      this.getNextQuestion();
    }
  }
  
  getNextQuestion(){
    if (this.currentQuestion)
    this.currentQuestion.answered = true;
    this.gameService.score.badAnswers++;
    if (this.gameService.allQuestionsAnswered()) {
      this.showResult = true;
    } else {
      this.gameService.nextQuestion();
    }
    console.log();

  }
  ngOnInit() {
    
  }

}
