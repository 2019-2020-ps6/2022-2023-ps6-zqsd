import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as _ from 'underscore' ;

import { GameService } from 'src/services/GameService';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  QuizzList: Quiz[] ; 
  chosenQuizz: Quiz|undefined;

  constructor( public gameService:GameService){
    this.QuizzList=gameService.getQuizList();
  }

  ngOnInit(){
    this.gameService.quizEvent$.subscribe(() => {
      this.jouerQuizz();
    });
  }
  jouerQuizz() {
    console.log("jouer quiz appelé");
    this.chosenQuizz = _.sample(this.QuizzList)
    if (this.chosenQuizz)
      this.gameService.currentQuiz = this.chosenQuizz
    else
      this.gameService.currentQuiz = this.QuizzList[0]
  }
  
}
