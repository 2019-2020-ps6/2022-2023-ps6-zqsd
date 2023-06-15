import { Quiz } from './../../models/quiz.model';
import { Component, Input } from '@angular/core';
import { Question,Answer } from 'src/models/Question.model';
import { GameService } from 'src/services/GameService';
import { GamepageComponent } from '../Gamepage.component/GamePage.Component';
import { DisplayService } from 'src/services/DisplayService';
import {AdvancedParameterService} from "../../services/Parameter/AdvancedParameterService";
import {AdvancedParameterMemoryWork} from "../../models/Parameter/advancedParameter.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-game-quiz',
  templateUrl: './GameQuiz.component.html',
  styleUrls: ['./GameQuiz.component.scss']
})
export class GameQuizComponent {
  @Input() countdown: any;

  puzzleIsEnable : AdvancedParameterMemoryWork['puzzle'] = this.advancedParameterService.getCurrentPuzzle();
  reflexionIsEnable : AdvancedParameterMemoryWork['reflection'] = this.advancedParameterService.getCurrentReflection();
  logicIsEnable : AdvancedParameterMemoryWork['logic'] = this.advancedParameterService.getCurrentLogic();

  isFinnished : boolean = false;
  private questionCounter : number = 1;
  currentQuiz : Quiz = {id:'', name:'', theme:'', questions: [] as Question[]};
  currentQuestion:Question =  {id:'', value: '',label:"",answers: [] as Answer[]};
  constructor(public gameService : GameService, public displayService : DisplayService, public advancedParameterService : AdvancedParameterService, public router : Router){
    this.gameService.getCurrentQuiz().subscribe((quiz : Quiz)=>{
      console.log(quiz);
      this.currentQuiz = quiz;
      this.isFinnished = false;
      this.questionCounter = 1;
    });
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      console.log(question)
      this.checkQuestionAllowed(question);
    })
    this.advancedParameterService.getCurrentPuzzleOBS().subscribe((puzzleIsEnable: AdvancedParameterMemoryWork['puzzle']) => {
      this.puzzleIsEnable = puzzleIsEnable;
    });
    this.advancedParameterService.getCurrentReflectionOBS().subscribe((reflexionIsEnable: AdvancedParameterMemoryWork['reflection']) => {
      this.reflexionIsEnable = reflexionIsEnable;
    });
    this.advancedParameterService.getCurrentLogicOBS().subscribe((logicIsEnable: AdvancedParameterMemoryWork['logic']) => {
      this.logicIsEnable = logicIsEnable;
    });
  }

  private checkQuestionAllowed(question : Question) {
    if (this.currentQuestion == question){
      return;
    }


    if (question.label == 'classical') {
      this.currentQuestion = question;
    } else {
      if ((!this.puzzleIsEnable && question.label == 'puzzle') || (!this.reflexionIsEnable && question.label == 'searching') || (!this.logicIsEnable && question.label == 'order')) {
        if (!this.isFinnished) {
          this.getNextQuestion(true);
        }
      } else {
        this.currentQuestion = question;
      }
    }

    this.questionCounter = this.questionCounter + 1;
    if (this.questionCounter == this.currentQuiz.questions.length) {
      this.isFinnished = true;
    } else if (this.questionCounter-1 > this.currentQuiz.questions.length) {
      this.router.navigateByUrl('/results');
      this.questionCounter = 1;
      this.isFinnished = false;
    }
  }




  private setTimer(){
    if (this.currentQuestion.label == 'puzzle') {
      this.displayService.setTopRightMargin_Timer(25,window.innerWidth/2 - 50,0);
    } else {
      this.displayService.setTopRightMargin_Timer(0,0,25);
    }
  }

  //on go next, pas de badAnswer donc pas de ++ a faire
  getNextQuestion(x:boolean){
    console.log(this.gameService.allQuestionsAnswered() + " allQuestionsAnswered");
    this.gameService.nextQuestion();
    this.setTimer();
    if (this.gameService.allQuestionsAnswered()) {
      this.router.navigateByUrl('/results');
      this.questionCounter = 1;
      this.isFinnished = false;
      console.log("zzzzzzzzzzzzzzzz")
    }
  }

  ngOnInit(){
    this.gameService.resetQuiz();
    this.isFinnished = false;
    this.questionCounter = 1;
    console.log("init");
  }
  stopCountdown():void{
    this.gameService.stopCountdown();
   }
  resetCountdown(countdown : any):void{
    this.gameService.resetCountdown(countdown);
  }
}
