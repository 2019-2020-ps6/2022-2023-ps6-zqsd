import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-PopUp',
  templateUrl: `./PopUp.component.html`,
  styleUrls:['./PopUp.component.scss']
})
export class PopUpComponent {
  title: string = "Message d'inactivité";
  message: string = "Vous êtes toujours là ?";

  constructor(public dialogRef: MatDialogRef<PopUpComponent>) {}

  onClose(result: boolean): void {
    this.dialogRef.close(result);
  }
}

