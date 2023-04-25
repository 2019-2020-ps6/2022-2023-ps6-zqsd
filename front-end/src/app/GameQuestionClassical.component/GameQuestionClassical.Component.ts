import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question,Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';

@Component({
  selector: 'app-game-question-classical',
  templateUrl: './GameQuestionClassical.component.html',
  styleUrls: ['./GameQuestionClassical.component.scss']
})


export class GameQuestionComponent implements OnInit {

  @Input() currentQuestion: Question|undefined;
  showResult =false;
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();


  constructor(private gameService: GameService) {

  }

  questionAnswered(goodAnswer:boolean) {
    if (goodAnswer) {
      this.gameService.score++;
    }
    if (this.gameService.allQuestionsAnswered()) {
      this.showResult = true;
    } else {
      this.answerEvent.emit(true); // émet l'événement pour passer à la question suivante
    }
  }



  ngOnInit() {
  }

}
