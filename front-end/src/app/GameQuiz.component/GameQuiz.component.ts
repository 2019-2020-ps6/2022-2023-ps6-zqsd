import { Quiz } from './../../models/quiz.model';
import { Component } from '@angular/core';
import { Question } from 'src/models/Question.model';
import { GameService } from 'src/services/GameService';

@Component({
  selector: 'app-game-quiz',
  templateUrl: './GameQuiz.component.html',
  styleUrls: ['./GameQuiz.component.scss']
})
export class GameQuizComponent {

  currentQuiz : Quiz = {id:'', name:'', theme:'', questions: [] as Question[]};
  constructor(public gameService : GameService){
    this.gameService.getCurrentQuiz().subscribe((quiz : Quiz)=>{
      this.currentQuiz = quiz;
    });
  }
  ngOnInit(){

  }
}
