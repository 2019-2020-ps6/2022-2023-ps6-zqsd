import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question,Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-question-searching',
  templateUrl: './GameQuestionSearching.Component.html',
  styleUrls: ['./GameQuestionSearching.Component.scss']
})


export class GameQuestionSearchingComponent implements OnInit {

  @Input() currentQuestion: Question|undefined;
  showResult =false;
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();
  public enableAnimationQuestion : boolean = true;
  selectedFont : string="";


  constructor(private gameService: GameService, public advPService : AdvancedParameterService, private router : Router) {

  }

  questionAnswered(goodAnswer:boolean){
      if (goodAnswer) {
        this.gameService.score++;
      }
      this.getNextQuestion();
      if (this.gameService.allQuestionsAnswered()) {
      this.router.navigateByUrl('/results');
      console.log("zzzzzzzzzzzzzzzz")
    }
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
    this.advPService.getSelectedFont().subscribe((font) => {
      this.selectedFont = font;
    })
  }
  getSelectedFont(){
    return this.selectedFont;
  }

}
