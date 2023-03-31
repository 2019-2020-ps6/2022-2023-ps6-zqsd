import { Quiz } from './../../models/quiz.model';
import { Component } from '@angular/core';
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
  constructor(private gameService : GameService){
    this.gameService.getCurrentQuiz().subscribe((quiz : Quiz)=>{
      this.currentQuiz = quiz;
    });
    
  }
  ngOnInit(){
    this.currentQuestion=this.currentQuiz.questions[0];
  }
}
