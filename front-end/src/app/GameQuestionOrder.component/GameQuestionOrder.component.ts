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
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];
  @Input() currentQuestion: Question|undefined;
  showResult =false;
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();
  answers: Answer[] = [];

  constructor(private gameService: GameService) {
    
  }

  questionAnswered(goodAnswer:boolean){
    if (goodAnswer) {
      this.gameService.score.goodAnswers++;
    } else {
      this.gameService.score.badAnswers++;
    }
    if (this.gameService.allQuestionsAnswered()) {
      this.showResult = true;
    } else {
      this.getNextQuestion();
    }

  }



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.answers, event.previousIndex, event.currentIndex);
  }
  
  getNextQuestion(){
    console.log(_.isEqual(this.answers,this.currentQuestion?.answers));
    
    this.answerEvent.emit(true);
  }
  ngOnInit() {
    if (this.currentQuestion)
    this.answers = [...this.currentQuestion?.answers];
    this.answers=_.shuffle(this.answers);
  }

}
