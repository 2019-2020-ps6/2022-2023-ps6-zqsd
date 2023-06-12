import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question, Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
import * as _ from 'underscore';
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-question-order',
  templateUrl: './GameQuestionOrder.component.html',
  styleUrls: ['./GameQuestionOrder.component.scss']
})
export class GameQuestionOrderComponent implements OnInit {

  @Input() currentQuestion: Question|undefined;
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();
  answers: Answer[] = [];
  public enableAnimationQuestion : boolean = true;
  selectedFont : string="";

  constructor(private gameService: GameService, public advPService : AdvancedParameterService, public router : Router) {}



  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.answers, event.previousIndex, event.currentIndex);
  }

  validate(){
    if (_.isEqual(this.answers,this.currentQuestion?.answers)){
      this.gameService.score++;
      console.log("Answer is correct")
    }
    this.answerEvent.emit(_.isEqual(this.answers,this.currentQuestion?.answers));
    if (this.gameService.allQuestionsAnswered()) {
      this.router.navigateByUrl('/results');
      console.log("zzzzzzzzzzzzzzzz")
    }
  }

  ngOnInit() {
    if (this.currentQuestion) {
      this.answers = [...this.currentQuestion?.answers];
      this.answers = _.shuffle(this.answers);
    }
    this.advPService.getCurrentQuestionAnimationOBS().subscribe((enable) => {
      this.enableAnimationQuestion = enable;
    })
    this.advPService.getSelectedFont().subscribe((font) => {
      this.selectedFont = font;
    })
  }
  getSelectedFont(){
    return this.selectedFont;
  }
}

