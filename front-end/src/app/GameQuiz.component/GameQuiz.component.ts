import { Quiz } from './../../models/quiz.model';
import { Component } from '@angular/core';
import { Question,Answer } from 'src/models/Question.model';
import { GameService } from 'src/services/GameService';
import { GamepageComponent } from '../Gamepage.component/GamePage.Component';


@Component({
  selector: 'app-game-quiz',
  templateUrl: './GameQuiz.component.html',
  styleUrls: ['./GameQuiz.component.scss']
})
export class GameQuizComponent {

  currentQuiz : Quiz = {id:'', name:'', theme:'', questions: [] as Question[]};
  currentQuestion:Question =  {id:'', value: '',label:"",answers: [] as Answer[]};
  constructor(public gameService : GameService){
    this.gameService.getCurrentQuiz().subscribe((quiz : Quiz)=>{
      this.currentQuiz = quiz;
    });
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion = question;

    })

  }


  getNextQuestion(x:boolean){
    if (this.currentQuestion)
    this.currentQuestion.answered = true;
    this.gameService.score.badAnswers++;
    if (this.gameService.allQuestionsAnswered()) {
      //show the result function
    } else {
      this.gameService.nextQuestion();
    }
    console.log();
  }
  ngOnInit(){
    this.currentQuestion=this.currentQuiz.questions[0];
  }
}
