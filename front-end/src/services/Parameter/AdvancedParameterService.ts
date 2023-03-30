import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdvancedParameterChronometer, AdvancedParameterFocusWork, AdvancedParameterMemoryWork } from 'src/models/Parameter/advancedParameter.model';
import { ADVANCED_PARAMETER_CHRONOMETER, ADVANCED_PARAMETER_MEMORY_WORK, ANDVANCED_PARAMETER_FOCUS_WORK } from 'src/mocks/Parameter/advancedParameter.mock';

@Injectable({
    providedIn: 'root'
  })
  export class AdvancedParameterService {

    private currentChronometerTime : AdvancedParameterChronometer['chronometer'] = ADVANCED_PARAMETER_CHRONOMETER.chronometer; //in seconds
    
    private currentComplexQuestion : AdvancedParameterMemoryWork['complexQuestion'] = ADVANCED_PARAMETER_MEMORY_WORK.complexQuestion;
    private currentPuzzle : AdvancedParameterMemoryWork['puzzle'] = ADVANCED_PARAMETER_MEMORY_WORK.puzzle;
    private currentReflection : AdvancedParameterMemoryWork['reflection'] = ADVANCED_PARAMETER_MEMORY_WORK.reflection;
    private currentMemory : AdvancedParameterMemoryWork['memory'] = ADVANCED_PARAMETER_MEMORY_WORK.memory;
    private currentLogic : AdvancedParameterMemoryWork['logic'] = ADVANCED_PARAMETER_MEMORY_WORK.logic;
    
    private currentBackGround : AdvancedParameterFocusWork['background'] = ANDVANCED_PARAMETER_FOCUS_WORK.background;
    private currentQuestionAnimation : AdvancedParameterFocusWork['questionAnimation'] = ANDVANCED_PARAMETER_FOCUS_WORK.questionAnimation;
    private currentRightAnswerAnimation : AdvancedParameterFocusWork['rightAnswerAnimation'] = ANDVANCED_PARAMETER_FOCUS_WORK.rightAnswerAnimation;
    private currentWrongAnswerAnimation : AdvancedParameterFocusWork['wrongAnswerAnimation'] = ANDVANCED_PARAMETER_FOCUS_WORK.wrongAnswerAnimation;


    public currentChronometer$: BehaviorSubject<AdvancedParameterChronometer['chronometer']> = new BehaviorSubject(this.currentChronometerTime)
    
    public currentComplexQuestion$: BehaviorSubject<AdvancedParameterMemoryWork['complexQuestion']> = new BehaviorSubject(this.currentComplexQuestion)
    public currentPuzzle$: BehaviorSubject<AdvancedParameterMemoryWork['puzzle']> = new BehaviorSubject(this.currentPuzzle)
    public currentReflection$: BehaviorSubject<AdvancedParameterMemoryWork['reflection']> = new BehaviorSubject(this.currentReflection)
    public currentMemory$: BehaviorSubject<AdvancedParameterMemoryWork['memory']> = new BehaviorSubject(this.currentMemory)
    public currentLogic$: BehaviorSubject<AdvancedParameterMemoryWork['logic']> = new BehaviorSubject(this.currentLogic)

    public currentBackGround$ : BehaviorSubject<AdvancedParameterFocusWork['background']> = new BehaviorSubject(this.currentBackGround)
    public currentQuestionAnimation$ : BehaviorSubject<AdvancedParameterFocusWork['questionAnimation']> = new BehaviorSubject(this.currentQuestionAnimation)
    public currentRightAnswerAnimation$ : BehaviorSubject<AdvancedParameterFocusWork['rightAnswerAnimation']> = new BehaviorSubject(this.currentRightAnswerAnimation)
    public currentWrongAnswerAnimation$ : BehaviorSubject<AdvancedParameterFocusWork['wrongAnswerAnimation']> = new BehaviorSubject(this.currentWrongAnswerAnimation)


    constructor () {
      
    }

    /*constructor(private advancedParameterService : AdvancedParameterService) {
      this.advancedParameterService.currentChronometer$.subscribe((chronometer: AdvancedParameterChronometer['chronometer']) => {
        this.updateChronometerTime(Number(chronometer));
      });
    }*/
    

    setCurrentComplexQuestion(complexQuestion : AdvancedParameterMemoryWork['complexQuestion']) {
      this.currentComplexQuestion = complexQuestion;
      this.currentComplexQuestion$.next(this.currentComplexQuestion);
    }

    setCurrentPuzzle(puzzle : AdvancedParameterMemoryWork['puzzle']) {
      this.currentPuzzle = puzzle;
      this.currentPuzzle$.next(puzzle);
    }

    setCurrentReflection(reflection : AdvancedParameterMemoryWork['reflection']) {
      this.currentReflection = reflection;
      this.currentReflection$.next(this.currentReflection);
    }

    setCurrentMemory(memory : AdvancedParameterMemoryWork['memory']) {
      this.currentMemory = memory;
      this.currentMemory$.next(this.currentMemory);
    }

    setCurrentLogic(logic : AdvancedParameterMemoryWork['logic']) {
      this.currentLogic = logic;
      this.currentLogic$.next(this.currentLogic);
    }

    setCurrentBackground(background : AdvancedParameterFocusWork['background']) {
      this.currentBackGround = background;
      this.currentBackGround$.next(this.currentBackGround);
    }

    setCurrentQuestionAnimation(questionAnimation : AdvancedParameterFocusWork['questionAnimation']) {
      this.currentQuestionAnimation = questionAnimation;
      this.currentQuestionAnimation$.next(this.currentQuestionAnimation);
    }

    setCurrentRightAnswerAnimation(rightAnswerAnimation : AdvancedParameterFocusWork['rightAnswerAnimation']) {
      this.currentRightAnswerAnimation = rightAnswerAnimation;
      this.currentRightAnswerAnimation$.next(this.currentRightAnswerAnimation);
    }

    setCurrentWrongAnswerAnimatino(wrongAnswerAnimation : AdvancedParameterFocusWork['wrongAnswerAnimation']) {
      this.currentWrongAnswerAnimation = wrongAnswerAnimation;
      this.currentWrongAnswerAnimation$.next(this.currentWrongAnswerAnimation);
    }



    getCurrentChronometerOBS() : Observable<AdvancedParameterChronometer['chronometer']> {
      return this.currentChronometer$.asObservable();
    }

    getCurrentChronometer() : number {
      return this.currentChronometerTime;
    }

    getCurrentComplexQuestion() : Observable<AdvancedParameterMemoryWork['complexQuestion']> {
      return this.currentComplexQuestion$.asObservable();
    }

    getCurrentPuzzle() : Observable<AdvancedParameterMemoryWork['puzzle']> {
      return this.currentPuzzle$.asObservable();
    }

    getCurrentReflection() : Observable<AdvancedParameterMemoryWork['reflection']> {
      return this.currentReflection$.asObservable();
    }

    getCurrentMemory() : Observable<AdvancedParameterMemoryWork['memory']> {
      return this.currentMemory$.asObservable();
    }

    getCurrentLogic() : Observable<AdvancedParameterMemoryWork['logic']> {
      return this.currentLogic$.asObservable();
    }

    getCurrentBackground() : Observable<AdvancedParameterFocusWork['background']> {
      return this.currentBackGround$.asObservable();
    }

    getCurrentQuestionAnimation() : Observable<AdvancedParameterFocusWork['questionAnimation']> {
      return this.currentQuestionAnimation$.asObservable();
    }

    getCurrentRightAnswerAnimation() : Observable<AdvancedParameterFocusWork['rightAnswerAnimation']> {
      return this.currentRightAnswerAnimation$.asObservable();
    }

    getCurrentWrongAnswerAnimatino() : Observable<AdvancedParameterFocusWork['wrongAnswerAnimation']> {
      return this.currentWrongAnswerAnimation$.asObservable();
    }


    updateChronometerTime(time : number){
      this.currentChronometerTime = time;
      this.currentChronometer$.next(this.currentChronometerTime)
    }
  }

