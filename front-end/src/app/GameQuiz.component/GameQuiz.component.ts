import { Quiz } from './../../models/quiz.model';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Question,Answer } from 'src/models/Question.model';
import { GameService } from 'src/services/GameService';
import { GamepageComponent } from '../Gamepage.component/GamePage.Component';
import { DisplayService } from 'src/services/DisplayService';

@Component({
  selector: 'app-game-quiz',
  templateUrl: './GameQuiz.component.html',
  styleUrls: ['./GameQuiz.component.scss']
})
export class GameQuizComponent {
  @Input() countdown: any;

  currentQuiz : Quiz = {id:'', name:'', theme:'', questions: [] as Question[]};
  currentQuestion:Question =  {id:'', value: '',label:"",answers: [] as Answer[]};
  constructor(public gameService : GameService, public displayService : DisplayService){
    this.gameService.getCurrentQuiz().subscribe((quiz : Quiz)=>{
      this.currentQuiz = quiz;
    });
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion = question;
    })
  }


  private setTimer(){
    if (this.currentQuestion.label == 'puzzle') {
      this.displayService.setTopRightMargin_Timer(25,window.innerWidth/2 - 50,0);
    } else {
      this.displayService.setTopRightMargin_Timer(0,0,25);
    }
  }

  //on go next, pas de badAnswer donc pas de ++ a faire
  getNextQuestion(x:boolean){
    this.gameService.nextQuestion();
    this.setTimer();
  }

  ngOnInit(){
    this.gameService.resetQuiz();
    console.log("init");
  }
  stopCountdown():void{
    this.gameService.stopCountdown();
   }
  resetCountdown(countdown : any):void{
    this.gameService.resetCountdown(countdown);
  }
}
