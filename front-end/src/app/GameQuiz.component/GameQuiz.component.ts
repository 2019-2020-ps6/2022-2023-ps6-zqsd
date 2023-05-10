import { Quiz } from './../../models/quiz.model';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Question,Answer } from 'src/models/Question.model';
import { GameService } from 'src/services/GameService';
import { GamepageComponent } from '../Gamepage.component/GamePage.Component';
import { DisplayService } from 'src/services/DisplayService';
import {AdvancedParameterService} from "../../services/Parameter/AdvancedParameterService";
import {AdvancedParameterMemoryWork} from "../../models/Parameter/advancedParameter.model";

@Component({
  selector: 'app-game-quiz',
  templateUrl: './GameQuiz.component.html',
  styleUrls: ['./GameQuiz.component.scss']
})
export class GameQuizComponent {
  @Input() countdown: any;

  complexQuestionIsEnable : AdvancedParameterMemoryWork['complexQuestion'] = this.advancedParameterService.getCurrentComplexQuestion();
  puzzleIsEnable : AdvancedParameterMemoryWork['puzzle'] = this.advancedParameterService.getCurrentPuzzle();
  reflexionIsEnable : AdvancedParameterMemoryWork['reflection'] = this.advancedParameterService.getCurrentReflection();
  memoryIsEnable : AdvancedParameterMemoryWork['memory'] = this.advancedParameterService.getCurrentMemory();
  logicIsEnable : AdvancedParameterMemoryWork['logic'] = this.advancedParameterService.getCurrentLogic();



  currentQuiz : Quiz = {id:'', name:'', theme:'', questions: [] as Question[]};
  currentQuestion:Question =  {id:'', value: '',label:"",answers: [] as Answer[]};
  constructor(public gameService : GameService, public displayService : DisplayService, public advancedParameterService : AdvancedParameterService){
    this.gameService.getCurrentQuiz().subscribe((quiz : Quiz)=>{
      this.currentQuiz = quiz;
    });
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion = question;
    })
    this.advancedParameterService.getCurrentComplexQuestionOBS().subscribe((complexQuestionIsEnable: AdvancedParameterMemoryWork['complexQuestion']) => {
      this.complexQuestionIsEnable = complexQuestionIsEnable;
    });
    this.advancedParameterService.getCurrentPuzzleOBS().subscribe((puzzleIsEnable: AdvancedParameterMemoryWork['puzzle']) => {
      this.puzzleIsEnable = puzzleIsEnable;
    });
    this.advancedParameterService.getCurrentReflectionOBS().subscribe((reflexionIsEnable: AdvancedParameterMemoryWork['reflection']) => {
      this.reflexionIsEnable = reflexionIsEnable;
    });
    this.advancedParameterService.getCurrentMemoryOBS().subscribe((memoryIsEnable: AdvancedParameterMemoryWork['memory']) => {
      this.memoryIsEnable = memoryIsEnable;
    });
    this.advancedParameterService.getCurrentLogicOBS().subscribe((logicIsEnable: AdvancedParameterMemoryWork['logic']) => {
      this.logicIsEnable = logicIsEnable;
    });
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
    this.gameService.nextQuestion();
    this.setTimer();
  }

  ngOnInit(){
    this.gameService.resetQuiz();
    console.log("init");
  }
  stopCountdown():void{
    this.gameService.stopCountdown();
   }
  resetCountdown(countdown : any):void{
    this.gameService.resetCountdown(countdown);
  }
}
