import { Component } from '@angular/core';
import { GameService } from 'src/services/GameService';
import { Quiz } from 'src/models/quiz.model';
import {QuizExample} from "../../mocks/quizz.mock";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PopUpComponent} from "../PopUp/PopUp.component";
import {PopUpDeleteQuizComponent} from "../popUpDeleteQuiz/popUpDeleteQuiz.component";
import {QuizService} from "../../services/QuizService";
import {UserService} from "../../services/UserService";
import {User} from "../../models/user.model";
import {Users} from "../../mocks/user.mock";

@Component({
  selector: 'app-user-list',
  templateUrl: './listUser.component.html',
  styleUrls: ['./listUser.component.scss']
})
export class UserListComponent {
  popupTitle: string = "Confirmation de suppression";
  popupMessage: string = "Etes-vous sûr de vouloir supprimer cet utilisateur ?";

  showPopUp: boolean = false;
  UserList: User[] = Object.values(Users);
  selectedUserId: number = 0;

  constructor( public userService:UserService, public dialog: MatDialog, private quizService: QuizService){
    this.userService.allUserDict$.subscribe((list)=> {
      this.UserList=Object.values(list);
    });
  }

  deleteUser(id: number) {
    this.showPopUp = true;
    this.selectedUserId = id;
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
        console.log("Suppression de l'utilisateur " + this.selectedUserId);
        console.log(this.UserList[this.selectedUserId]);
        this.userService.deleteUser(this.UserList[this.selectedUserId]);
      } else {
        // Le bouton "Annuler" a été sélectionné : rien à faire
      }
    });
    return dialogRef;
  }



}
