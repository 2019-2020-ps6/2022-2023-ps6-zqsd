import { Component } from '@angular/core';
import { GameService } from 'src/services/GameService';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.scss']
})
export class QuizzListComponent {

  
  QuizzList: Quiz[] ;

  constructor( public gameService:GameService){
    this.QuizzList=gameService.getQuizList();

  }

  jouerQuizz(id: string) {
    this.gameService.currentQuiz=this.QuizzList[Number(id)-1]
    
  }


}
