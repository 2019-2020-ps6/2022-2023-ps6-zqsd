import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Answer } from 'src/models/Question.model';

@Component({
    selector: 'app-GameAnswer',
    templateUrl: './GameAnswer.Component.html',
    styleUrls: ['./GameAnswer.Component.scss']
})

export class GameAnswerComponent implements OnInit {


  @Input() currentAnswer: Answer|undefined;
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();

  constructor(private gameService: GameService) {
  }

  getAnswerResult(){
    if (this.currentAnswer!=undefined)
      this.answerEvent.emit(this.currentAnswer.isCorrect)
    else
      this.answerEvent.emit(false);
  }
    ngOnInit(): void {}
}

