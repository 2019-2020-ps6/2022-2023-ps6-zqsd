import { Component, EventEmitter, Input, OnInit, Output, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Question, Answer } from '../../models/Question.model';
import { QuestionQuizz } from '../../mocks/question.mock';

@Component({
  selector: 'app-game-question-classical',
  templateUrl: './GameQuestionClassical.component.html',
  styleUrls: ['./GameQuestionClassical.component.scss']
})
export class GameQuestionComponent implements OnInit, AfterViewInit {

  @Input() currentQuestion: Question | undefined;
  showResult = false;
  @Output() answerEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChildren('gameAnswer') gameAnswers: QueryList<ElementRef>;


  constructor(private gameService: GameService) {
    this.gameAnswers = new QueryList<ElementRef>();
  }

  questionAnswered(goodAnswer: boolean) {
    if (goodAnswer) {
      this.gameService.score.goodAnswers++;
      if (this.currentQuestion != undefined) {
        this.currentQuestion.answered = true;
        this.answerEvent.emit(true);
      }
    } else {
      this.gameService.score.badAnswers++;
      if (this.currentQuestion != undefined) {
        this.currentQuestion.answered = true;
        this.answerEvent.emit(true);
      }
    }
    if (this.gameService.allQuestionsAnswered()) {
      this.showResult = true;
    } else {
      this.getNextQuestion();
    }
  }

  getNextQuestion() {
    if (this.currentQuestion != undefined) {
      this.currentQuestion.answered = true;
    }
    if (this.gameService.allQuestionsAnswered()) {
      this.showResult = true;
    }
    this.answerEvent.emit(true);
    this.gameService.nextQuestion();
    console.log(this.gameService.allQuestionsAnswered())
    console.log(this.currentQuestion)
    console.log(this.showResult)
    console.log(this.gameService.currentQuiz.questions)
  }

  ngOnInit() { }

  ngAfterViewInit() {
    let maxWidth = 0;
    this.gameAnswers.forEach(answer => {
      const width = answer.nativeElement.offsetWidth;
      if (width > maxWidth) {
        maxWidth = width;
      }
    });
    console.log(`La largeur maximale est ${maxWidth}px`);
  }


}



