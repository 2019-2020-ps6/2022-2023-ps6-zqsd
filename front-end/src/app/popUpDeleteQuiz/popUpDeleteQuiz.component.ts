import {Component, Inject, Input} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { GameService } from 'src/services/GameService';

@Component({
  selector: 'app-PopUpDeleteQuiz',
  templateUrl: `./popUpDeleteQuiz.component.html`,
  styleUrls: ['./popUpDeleteQuiz.component.scss']
})
export class PopUpDeleteQuizComponent {
  @Input() title: string = "Confirmation de suppression";
  @Input() message: string = "Etes-vous sûr de vouloir supprimer ce quizz ?";


  constructor(public dialogRef: MatDialogRef<PopUpDeleteQuizComponent>, private gameService : GameService, private router: Router) {}

  onClose(result: boolean): void {
    this.dialogRef.close(result);
    console.log("pop up fermé");
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
