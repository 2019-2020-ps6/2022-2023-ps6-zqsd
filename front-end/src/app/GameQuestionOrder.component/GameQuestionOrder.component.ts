import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question,Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';
import {CdkDragDrop,moveItemInArray,CdkDrag} from "@angular/cdk/drag-drop";
import * as _ from 'underscore';

@Component({
  selector: 'app-game-question-order',
  templateUrl: './GameQuestionOrder.component.html',
  styleUrls: ['./GameQuestionOrder.component.scss']
})


export class GameQuestionOrderComponent implements OnInit {

  @Input() currentQuestion: Question|undefined;
  showResult =false;
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();
  answers: Answer[] = [];

  constructor(private gameService: GameService) {

  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.answers, event.previousIndex, event.currentIndex);
  }

  validate(){
    if (_.isEqual(this.answers,this.currentQuestion?.answers)){
      this.gameService.score++;
      console.log("Answer is correct")
    }
    this.answerEvent.emit(_.isEqual(this.answers,this.currentQuestion?.answers));
  }

  ngOnInit() {
    if (this.currentQuestion)
    this.answers = [...this.currentQuestion?.answers];
    this.answers=_.shuffle(this.answers);
  }

}
