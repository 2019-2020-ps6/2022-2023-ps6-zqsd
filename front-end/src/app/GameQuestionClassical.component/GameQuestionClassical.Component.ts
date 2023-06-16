import { Component, EventEmitter, Input, OnInit, Output, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question, Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';

@Component({
  selector: 'app-game-question-classical',
  templateUrl: './GameQuestionClassical.Component.html',
  styleUrls: ['./GameQuestionClassical.Component.scss']
})
export class GameQuestionComponent implements OnInit{

  @Input() currentQuestion: Question | undefined;
  showResult = false;
  @Output() answerEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChildren('gameAnswer') gameAnswers: QueryList<ElementRef>;

  public enableAnimationQuestion : boolean = true;
  selectedFont : string="";


  constructor(private gameService: GameService, public advPService : AdvancedParameterService) {
    this.gameAnswers = new QueryList<ElementRef>();
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



