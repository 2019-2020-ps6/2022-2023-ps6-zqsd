import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
import { GameQuizComponent } from '../GameQuiz.component/GameQuiz.component';
import { GameService } from 'src/services/GameService';

@Component({
    selector: 'app-GamePage',
    templateUrl: './GamePage.Component.html',
    styleUrls: ['./GamePage.Component.scss']
})
export class GamepageComponent implements OnInit {
    public number: number = 15;
    public countdown: HTMLElement|null = null;
    public remainingTime: number = 30;

    constructor(private aps : AdvancedParameterService, private gameService: GameService, private cdRef: ChangeDetectorRef){}

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
    }
}

