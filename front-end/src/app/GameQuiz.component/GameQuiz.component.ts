import { Quiz } from './../../models/quiz.model';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Question,Answer } from 'src/models/Question.model';
import { GameService } from 'src/services/GameService';


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


  //on go next, pas de badAnswer donc pas de ++ a faire
  getNextQuestion(x:boolean){
    this.gameService.nextQuestion();
  }

  ngOnInit(){
    this.gameService.resetQuiz();
    console.log("init");
  }
}
