import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Answer } from 'src/models/Question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-GameAnswer',
  templateUrl: './GameAnswer.Component.html',
  styleUrls: ['./GameAnswer.Component.scss']
})
export class GameAnswerComponent implements OnInit {

  @Input() currentAnswer: Answer | undefined;
  @Output() answerEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public questionType : string="";

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  getAnswerResult(): void {
    const buttonSound = new Audio();
    buttonSound.src = './assets/sounds/click.mp3';
    buttonSound.play();
    setTimeout(() => {
      if (this.currentAnswer != undefined) {
        this.answerEvent.emit(this.currentAnswer.isCorrect);
      } else {
        this.answerEvent.emit(false);
      }
    }, 50); // délai de 3 secondes
  }

  ngOnInit(): void {
    this.gameService.getCurrentQuestion().subscribe((question) =>{
      this.questionType = question.label;
      console.log(this.questionType);
    })
  }

}

