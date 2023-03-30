import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdvancedParameterChronometer, AdvancedParameterFocusWork, AdvancedParameterMemoryWork } from 'src/models/Parameter/advancedParameter.model';
import { ADVANCED_PARAMETER_CHRONOMETER, ADVANCED_PARAMETER_MEMORY_WORK, ANDVANCED_PARAMETER_FOCUS_WORK } from 'src/mocks/Parameter/advancedParameter.mock';

@Injectable({
    providedIn: 'root'
  })
  export class AdvancedParameterService {
  
    public currentChronometer$: BehaviorSubject<AdvancedParameterChronometer['chronometer']> = new BehaviorSubject(ADVANCED_PARAMETER_CHRONOMETER.chronometer)
    
    public currentComplexQuestion$: BehaviorSubject<AdvancedParameterMemoryWork['complexQuestion']> = new BehaviorSubject(ADVANCED_PARAMETER_MEMORY_WORK.complexQuestion)
    public currentPuzzle$: BehaviorSubject<AdvancedParameterMemoryWork['puzzle']> = new BehaviorSubject(ADVANCED_PARAMETER_MEMORY_WORK.puzzle)
    public currentReflection$: BehaviorSubject<AdvancedParameterMemoryWork['reflection']> = new BehaviorSubject(ADVANCED_PARAMETER_MEMORY_WORK.reflection)
    public currentMemory$: BehaviorSubject<AdvancedParameterMemoryWork['memory']> = new BehaviorSubject(ADVANCED_PARAMETER_MEMORY_WORK.memory)
    public currentLogic$: BehaviorSubject<AdvancedParameterMemoryWork['logic']> = new BehaviorSubject(ADVANCED_PARAMETER_MEMORY_WORK.logic)

    public currentBackGround$ : BehaviorSubject<AdvancedParameterFocusWork['background']> = new BehaviorSubject(ANDVANCED_PARAMETER_FOCUS_WORK.background)
    public currentQuestionAnimation$ : BehaviorSubject<AdvancedParameterFocusWork['questionAnimation']> = new BehaviorSubject(ANDVANCED_PARAMETER_FOCUS_WORK.questionAnimation)
    public currentRightAnswerAnimation$ : BehaviorSubject<AdvancedParameterFocusWork['rightAnswerAnimation']> = new BehaviorSubject(ANDVANCED_PARAMETER_FOCUS_WORK.rightAnswerAnimation)
    public currentWrongAnswerAnimation$ : BehaviorSubject<AdvancedParameterFocusWork['wrongAnswerAnimation']> = new BehaviorSubject(ANDVANCED_PARAMETER_FOCUS_WORK.wrongAnswerAnimation)




    constructor() {
    }
    
    setCurrentChronometer(chronometer : AdvancedParameterChronometer['chronometer']) {
      this.currentChronometer$.next(chronometer);
    }

    setCurrentComplexQuestion(complexQuestion : AdvancedParameterMemoryWork['complexQuestion']) {
      this.currentComplexQuestion$.next(complexQuestion);
    }

    setCurrentPuzzle(puzzle : AdvancedParameterMemoryWork['puzzle']) {
      this.currentPuzzle$.next(puzzle);
    }

    setCurrentReflection(reflection : AdvancedParameterMemoryWork['reflection']) {
      this.currentReflection$.next(reflection);
    }

    setCurrentMemory(memory : AdvancedParameterMemoryWork['memory']) {
      this.currentMemory$.next(memory);
    }

    setCurrentLogic(logic : AdvancedParameterMemoryWork['logic']) {
      this.currentLogic$.next(logic);
    }

    setCurrentBackground(background : AdvancedParameterFocusWork['background']) {
      this.currentBackGround$.next(background);
    }

    setCurrentQuestionAnimation(questionAnimation : AdvancedParameterFocusWork['questionAnimation']) {
      this.currentQuestionAnimation$.next(questionAnimation);
    }

    setCurrentRightAnswerAnimation(rightAnswerAnimation : AdvancedParameterFocusWork['rightAnswerAnimation']) {
      this.currentRightAnswerAnimation$.next(rightAnswerAnimation);
    }

    setCurrentWrongAnswerAnimatino(wrongAnswerAnimation : AdvancedParameterFocusWork['wrongAnswerAnimation']) {
      this.currentWrongAnswerAnimation$.next(wrongAnswerAnimation);
    }



    getCurrentChronometer() : Observable<AdvancedParameterChronometer['chronometer']> {
      return this.currentChronometer$.asObservable();
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


  }

