import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Answer } from 'src/models/Question.model';

@Component({
    selector: 'app-GameAnswer',
    templateUrl: './GameAnswer.Component.html',
    styleUrls: ['./GameAnswer.Component.scss']
})

export class GameAnswer_Component implements OnInit {

  currentAnswer$: Answer = {label:'', value:'', isCorrect: undefined, order: undefined};
  score: number = 0; // Ajout d'une variable score initialisée à 0

  constructor(private gameService: GameService) {
    this.gameService.currentAnswer$.subscribe((answer: Answer) => {
      this.currentAnswer$ = answer;
      if(this.getAnswerResult()){ // Si la réponse est correcte
        this.score++; // On incrémente le score de 1
      }
    });
  }

  getAnswerResult(){
    return this.currentAnswer$.isCorrect;
  }
  getScore(){
    return this.score;
  }
    ngOnInit(): void {}

    showScore() {
      const score = this.getScore();
      // Afficher le score dans une boîte de dialogue ou un composant dédié
      }
}

