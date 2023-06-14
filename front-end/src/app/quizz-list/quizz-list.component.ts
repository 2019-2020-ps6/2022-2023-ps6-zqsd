import { Component } from '@angular/core';
import { GameService } from 'src/services/GameService';
import { Quiz } from 'src/models/quiz.model';
import {QuizExample} from "../../mocks/quizz.mock";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PopUpComponent} from "../PopUp/PopUp.component";
import {PopUpDeleteQuizComponent} from "../popUpDeleteQuiz/popUpDeleteQuiz.component";
import {QuizService} from "../../services/QuizService";

@Component({
  selector: 'app-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.scss']
})
export class QuizzListComponent {

  showPopUp: boolean = false;
  QuizzList: Quiz[] = QuizExample;
  selectedQuizId: number = 0;

  constructor( public gameService:GameService, public dialog: MatDialog, private quizService: QuizService){
    this.QuizzList=gameService.getQuizList();
  }


  jouerQuizz(id: number) {
    this.gameService.currentQuiz=this.QuizzList[Number(id)]

  }

  deleteQuizz(id: number) {
    this.showPopUp = true;
    this.selectedQuizId = id;
    this.openDialog();
  }

  openDialog(): MatDialogRef<PopUpDeleteQuizComponent> {
    const dialogRef = this.dialog.open(PopUpDeleteQuizComponent, {
      width: '600px',
      height: '400px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.quizService.deleteQuiz(this.QuizzList[this.selectedQuizId]);
      } else {
        // Le bouton "Annuler" a été sélectionné : rien à faire
      }
    });
    return dialogRef;
  }



}
