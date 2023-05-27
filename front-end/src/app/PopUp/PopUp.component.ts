import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { GameService } from 'src/services/GameService';

@Component({
  selector: 'app-PopUp',
  templateUrl: `./PopUp.component.html`,
  styleUrls: ['./PopUp.component.scss']
})
export class PopUpComponent {
  title: string = "Message d'inactivité";
  message: string = "Vous êtes toujours là ?";

  constructor(public dialogRef: MatDialogRef<PopUpComponent>, private gameService : GameService, private router: Router) {}

  onClose(result: boolean): void {
    this.dialogRef.close(result);
    console.log("pop up fermé");
  }

  onRetry(): void {
    this.onClose(false);
    this.gameService.emitRetryEvent();
  }

  onSkip(): void {
    this.onClose(false);
    this.gameService.emitSkipEvent();
  }

  onHome() : void {
    this.onClose(false);
    this.router.navigate(['/homePage']);
  }
}
