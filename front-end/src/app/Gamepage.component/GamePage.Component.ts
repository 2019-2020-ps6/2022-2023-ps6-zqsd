import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
import { GameQuizComponent } from '../GameQuiz.component/GameQuiz.component';
import { GameService } from 'src/services/GameService';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopUpComponent } from '../PopUp/PopUp.component';
import { DisplayService } from 'src/services/DisplayService';

@Component({
    selector: 'app-GamePage',
    templateUrl: './GamePage.Component.html',
    styleUrls: ['./GamePage.Component.scss']
})
export class GamepageComponent implements OnInit {
    public number: number = 15;
    public countdown: HTMLElement|null = null;
    public remainingTime: number = 30;
    public showPopUp: boolean = false;
    public topValue: number = 0;
    public rightValue: number = 0;
    public marginValue: number = 25;


    constructor(private gameService: GameService, public dialog: MatDialog, private displayService : DisplayService) { }

    ngOnInit(): void {
        // Récupère l'élément HTML pour afficher le compte à rebours
        this.countdown = document.getElementById('countdown');
        if(this.countdown){
          this.gameService.countdown = this.countdown;
            this.gameService.resetCountdown(this.countdown);
        }
        this.gameService.getRemainingTime().subscribe((remainingTime) =>{
            this.remainingTime = remainingTime;
            if(this.countdown){
                this.countdown.textContent = this.remainingTime.toString();
            }
        })
        this.gameService.getShowDialog().subscribe(showDialog => {
          if (showDialog) {
            this.openDialog();
          }
        })
    }
    openDialog(): MatDialogRef<PopUpComponent> {
      const dialogRef = this.dialog.open(PopUpComponent, {
        width: '600px',
        height: '400px',
        disableClose: true,
      });   
      dialogRef.afterClosed().subscribe(() => {
        this.gameService.setShowDialog(false);
        this.dialog.closeAll();
      });
      return dialogRef;
    }
    




}

