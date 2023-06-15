import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as _ from 'underscore' ;
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { UserService } from 'src/services/UserService';

import { GameService } from 'src/services/GameService';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  currentUser = this.userService.getCurrentUser();
  QuizzList: Quiz[] ;
  chosenQuizz: Quiz|undefined;

  constructor( public gameService:GameService,public userService: UserService){
    this.QuizzList=gameService.getQuizList();
    this.showUser();
    console.log(this.currentUser);
  }

  ngOnInit(){
    this.gameService.quizEvent$.subscribe(() => {
      this.jouerQuizz();
    });
    this.currentUser = this.userService.getCurrentUser();

  }
  jouerQuizz() {
    console.log("jouer quiz appelé");
    this.chosenQuizz = _.sample(this.QuizzList)
    if (this.chosenQuizz)
      this.gameService.currentQuiz = this.chosenQuizz
    else
      this.gameService.currentQuiz = this.QuizzList[0]
  }


  bienvenueMessage: string = '';

  showUser() {
    const user = this.userService.getCurrentUser();
    if (user && user.toString() !== "Default") {
      this.bienvenueMessage = 'Bienvenue ' + user;
    } else {
      this.bienvenueMessage = ''; // Ne pas définir de message s'il n'y a pas de prénom
    }
  }




}
