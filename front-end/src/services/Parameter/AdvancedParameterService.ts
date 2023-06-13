import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AdvancedParameterChronometer, AdvancedParameterFocusWork, AdvancedParameterMemoryWork } from 'src/models/Parameter/advancedParameter.model';
import { ADVANCED_PARAMETER_CHRONOMETER, ADVANCED_PARAMETER_MEMORY_WORK, ANDVANCED_PARAMETER_FOCUS_WORK } from 'src/mocks/Parameter/advancedParameter.mock';
import {HttpClient} from "@angular/common/http";

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

    public svgActif: boolean = true;
    public svgActif$ : BehaviorSubject<boolean> = new BehaviorSubject(this.svgActif)
    public isUpperCase: boolean = false;
    public isUpperCase$ : BehaviorSubject<boolean> = new BehaviorSubject(this.isUpperCase)

    public selectedFont: string = "Arial";
    public selectedFont$ : BehaviorSubject<string> = new BehaviorSubject(this.selectedFont);


    constructor (private _httpClient: HttpClient) {

    }

    /*constructor(private advancedParameterService : AdvancedParameterService) {
      this.advancedParameterService.currentChronometer$.subscribe((chronometer: AdvancedParameterChronometer['chronometer']) => {
        this.updateChronometerTime(Number(chronometer));
      });
    }*/


    updateChronometerTime(time : AdvancedParameterChronometer['chronometer']){
      this.currentChronometerTime = time;
      this.currentChronometer$.next(this.currentChronometerTime)
    }

    setCurrentComplexQuestion(complexQuestion : AdvancedParameterMemoryWork['complexQuestion']) {
      this.currentComplexQuestion = complexQuestion;
      this.currentComplexQuestion$.next(this.currentComplexQuestion);
    }

    setCurrentPuzzle(puzzle : AdvancedParameterMemoryWork['puzzle']) {
      this.currentPuzzle = puzzle;
      this.currentPuzzle$.next(this.currentPuzzle);
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





    switchCurrentComplexQuestion() {
      this.currentComplexQuestion = !this.currentComplexQuestion;
      this.currentComplexQuestion$.next(this.currentComplexQuestion);
    }

    switchCurrentPuzzle() {
      this.currentPuzzle = !this.currentPuzzle;
      console.log(this.currentPuzzle);
      this.currentPuzzle$.next(this.currentPuzzle);
    }

    switchCurrentReflection() {
      this.currentReflection = !this.currentReflection;
      console.log(this.currentReflection);
      this.currentReflection$.next(this.currentReflection);
    }

    switchCurrentMemory() {
      this.currentMemory = !this.currentMemory;
      console.log(this.currentMemory);
      this.currentMemory$.next(this.currentMemory);
    }

    switchCurrentLogic() {
      this.currentLogic = !this.currentLogic;
      console.log(this.currentLogic);
      this.currentLogic$.next(this.currentLogic);
    }

    switchCurrentBackground() {
      this.currentBackGround = !this.currentBackGround;
      this.currentBackGround$.next(this.currentBackGround);
      console.log(this.currentBackGround);

    }

    switchCurrentQuestionAnimation() {
      this.currentQuestionAnimation = !this.currentQuestionAnimation;
      console.log(this.currentQuestionAnimation);
      this.currentQuestionAnimation$.next(this.currentQuestionAnimation);
    }

    switchCurrentRightAnswerAnimation() {
      this.currentRightAnswerAnimation = !this.currentRightAnswerAnimation;
      console.log(this.currentRightAnswerAnimation);
      this.currentRightAnswerAnimation$.next(this.currentRightAnswerAnimation);
    }

    switchCurrentWrongAnswerAnimatinon() {
      this.currentWrongAnswerAnimation = !this.currentWrongAnswerAnimation;
      console.log(this.currentWrongAnswerAnimation);
      this.currentWrongAnswerAnimation$.next(this.currentWrongAnswerAnimation);
    }





    getCurrentChronometerOBS() : Observable<AdvancedParameterChronometer['chronometer']> {
      return this.currentChronometer$.asObservable();
    }

    getCurrentComplexQuestionOBS() : Observable<AdvancedParameterMemoryWork['complexQuestion']> {
      return this.currentComplexQuestion$.asObservable();
    }

    getCurrentPuzzleOBS() : Observable<AdvancedParameterMemoryWork['puzzle']> {
      return this.currentPuzzle$.asObservable();
    }

    getCurrentReflectionOBS() : Observable<AdvancedParameterMemoryWork['reflection']> {
      return this.currentReflection$.asObservable();
    }

    getCurrentMemoryOBS() : Observable<AdvancedParameterMemoryWork['memory']> {
      return this.currentMemory$.asObservable();
    }

    getCurrentLogicOBS() : Observable<AdvancedParameterMemoryWork['logic']> {
      return this.currentLogic$.asObservable();
    }

    getCurrentBackgroundOBS() : Observable<AdvancedParameterFocusWork['background']> {
      return this.currentBackGround$.asObservable();
    }

    getCurrentQuestionAnimationOBS() : Observable<AdvancedParameterFocusWork['questionAnimation']> {
      return this.currentQuestionAnimation$.asObservable();
    }

    getCurrentRightAnswerAnimationOBS() : Observable<AdvancedParameterFocusWork['rightAnswerAnimation']> {
      return this.currentRightAnswerAnimation$.asObservable();
    }

    getCurrentWrongAnswerAnimatinoOBS() : Observable<AdvancedParameterFocusWork['wrongAnswerAnimation']> {
      return this.currentWrongAnswerAnimation$.asObservable();
    }





    getCurrentChronometer() : number {
      return this.currentChronometerTime;
    }

    getCurrentComplexQuestion() : AdvancedParameterMemoryWork['complexQuestion'] {
      return this.currentComplexQuestion;
    }

    getCurrentPuzzle() : AdvancedParameterMemoryWork['puzzle'] {
      return this.currentPuzzle;
    }

    getCurrentReflection() : AdvancedParameterMemoryWork['reflection'] {
      return this.currentReflection;
    }

    getCurrentMemory() : AdvancedParameterMemoryWork['memory'] {
      return this.currentMemory;
    }

    getCurrentLogic() : AdvancedParameterMemoryWork['logic'] {
      return this.currentLogic;
    }

    getCurrentBackground() : AdvancedParameterFocusWork['background'] {
      return this.currentBackGround;
    }

    getCurrentQuestionAnimation() : AdvancedParameterFocusWork['questionAnimation'] {
      return this.currentQuestionAnimation;
    }

    getCurrentRightAnswerAnimation() : AdvancedParameterFocusWork['rightAnswerAnimation'] {
      return this.currentRightAnswerAnimation;
    }

    getCurrentWrongAnswerAnimatino() : AdvancedParameterFocusWork['wrongAnswerAnimation'] {
      return this.currentWrongAnswerAnimation;
    }

    getSvgEnabled() : Observable<boolean> {
      return this.svgActif$.asObservable();

    }
    setSvgActif(value: boolean) {
      this.svgActif = value;
      this.svgActif$.next(value);
    }
    getUpperCase() : Observable<boolean> {
      return this.isUpperCase$.asObservable();
    }
    setUpperCase(value: boolean) {
      this.isUpperCase = value;
      this.isUpperCase$.next(value);
    }
    getSelectedFont() : Observable<string> {
      return this.selectedFont$.asObservable();
    }
    setSelectedFont(value: string) {
      this.selectedFont = value;
      this.selectedFont$.next(value);
      console.log("texte changé en : " + this.selectedFont);
    }
  }

