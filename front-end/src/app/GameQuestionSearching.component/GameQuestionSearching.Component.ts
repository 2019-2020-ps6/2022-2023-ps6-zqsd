import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question,Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';

@Component({
  selector: 'app-game-question-searching',
  templateUrl: './GameQuestionSearching.component.html',
  styleUrls: ['./GameQuestionSearching.component.scss']
})


export class GameQuestionSearchingComponent implements OnInit {

  @Input() currentQuestion: Question|undefined;
  showResult =false;
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();
  public enableAnimationQuestion : boolean = true;


  constructor(private gameService: GameService, private advPService : AdvancedParameterService) {

  }

  questionAnswered(goodAnswer:boolean){
      this.getNextQuestion();
  }

  getNextQuestion(){
    if (this.currentQuestion != undefined) {
      this.currentQuestion.answered = true;
    }
    if (this.gameService.allQuestionsAnswered()) {
      this.showResult = true;
    }
    this.answerEvent.emit(true);
  }

  ngOnInit() {
    this.advPService.getCurrentQuestionAnimationOBS().subscribe((enable) => {
      this.enableAnimationQuestion = enable;
    })
  }

}
