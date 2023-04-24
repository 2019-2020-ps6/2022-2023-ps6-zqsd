import { Quiz } from './../../models/quiz.model';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
  constructor(public gameService : GameService, private router:Router){
    this.gameService.getCurrentQuiz().subscribe((quiz : Quiz)=>{
      this.currentQuiz = quiz;
    });
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion = question;
      
    })
    
  
  }


  getNextQuestion(x:boolean){
    this.currentQuestion.answered = true;
    console.log("jej");
    if (this.gameService.allQuestionsAnswered()) {
      
      this.router.navigate(['/results'])
    } else {
      this.gameService.nextQuestion();
    }
    console.log();

  }
  ngOnInit(){
    this.currentQuestion=this.currentQuiz.questions[0];
  }
}
