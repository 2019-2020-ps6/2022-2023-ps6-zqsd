import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
import { GameQuizComponent } from '../GameQuiz.component/GameQuiz.component';
import { GameService } from 'src/services/GameService';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../PopUp/PopUp.component';


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

    constructor(private aps: AdvancedParameterService, private gameService: GameService, private cdRef: ChangeDetectorRef, public dialog: MatDialog) { }

    ngOnInit(): void {
        // Récupère l'élément HTML pour afficher le compte à rebours
        this.countdown = document.getElementById('countdown');
        if(this.countdown){
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
    openDialog(): void {
      const dialogRef = this.dialog.open(PopUpComponent, {
        width:'600px',
        height:'400px',
        disableClose: true,

      });

      dialogRef.afterClosed().subscribe(result => {
        this.gameService.setShowDialog(false);
        setTimeout(() => {
          this.gameService.resetCountdown(this.countdown);
        }, 100);
      });
    }




}

