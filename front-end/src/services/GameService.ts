import { GamepageComponent } from './../app/Gamepage.component/GamePage.Component';
import { AnswerClassic1 } from './../mocks/question.mock';
import { GameAnswerComponent } from './../app/GameAnswer.component/GameAnswer.Component';
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { serverUrl } from '../configs/server.config';
import { QuizExample } from '../mocks/quizz.mock';
import { Quiz } from '../models/quiz.model';
import { Question,Answer } from 'src/models/Question.model';
import { AdvancedParameterService } from './Parameter/AdvancedParameterService';




@Injectable({
  providedIn: 'root'
})
export class GameService {
  retryEvent: Subject<void> = new Subject<void>();
  skipEvent: Subject<void> = new Subject<void>();

  public quizList$: Observable<Quiz[]>= this._httpClient.get<Quiz[]>(serverUrl+"/quizzes");
  public quizList: Quiz[] = QuizExample;
  public answerResult : boolean|undefined= true;
  currentQuiz: Quiz= QuizExample[0];
  public currentQuiz$: BehaviorSubject<Quiz> = new BehaviorSubject(this.currentQuiz);
  private index:number=0;
  private currentQuestion: Question = this.currentQuiz.questions[0];
  public currentQuestion$: BehaviorSubject<Question>= new BehaviorSubject(this.currentQuestion);
  public currentAnswer$: Subject<Answer> = new Subject<Answer>();
  public answerResult$ : BehaviorSubject<boolean|undefined> = new BehaviorSubject(this.answerResult);
  score = 0;

  public deadline: number = 30;
  public intervalId: any;
  public remainingTime: number = 30;
  public remainingTime$: BehaviorSubject<number> = new BehaviorSubject(this.remainingTime);
  public countdown: HTMLElement|null = null;

  private showDialogSubject = new BehaviorSubject<boolean>(false);
  public showDialog$ = this.showDialogSubject.asObservable();

  private quizEventSubject = new Subject<void>();
  quizEvent$ = this.quizEventSubject.asObservable()

  constructor(private aps : AdvancedParameterService, private _httpClient: HttpClient) {
    this.aps.getCurrentChronometerOBS().subscribe((deadline) => {
      this.deadline =deadline;
    });
    this.retryEvent.subscribe(() => {
      this.resetCountdown(this.countdown);
      console.log("Retry event received");
    });

    this.skipEvent.subscribe(() => {
      this.nextQuestion();
      console.log("Skip event received");
    });

    this.quizList$.subscribe((list)=> {
      this.quizList=list;

      console.log(this.quizList)
      this.currentQuiz =this.quizList[0];
      this.currentQuestion=this.currentQuiz.questions[0];
      this.currentQuiz$= new BehaviorSubject<Quiz>(this.currentQuiz)
      this.currentQuestion$=new BehaviorSubject<Question>(this.currentQuestion)
    });
  }


  getCurrentQuestion(): Observable<Question> {
    return this.currentQuestion$.asObservable();

  }

  nextQuestion(): number  {
    this.index+=1;
    this.setCurrentQuestion(this.index)

    this.resetCountdown(this.countdown);
    return this.index;
  }

  setCurrentQuestion(index: number) {
    console.log(index);
    const question = this.currentQuiz.questions[index];


    if(question) {
      this.currentQuestion  = question;
      this.currentQuestion$.next(this.currentQuestion);
    }
  }

  getQuizList(): Quiz[] {
    return this.quizList;
  }
  getCurrentAnswer(): Observable<any> {
    return this.currentQuestion$.asObservable();
  }

  setCurrentQuiz(quiz: Quiz) {
    this.currentQuiz = quiz;
    this.currentQuiz$.next(this.currentQuiz);
  }

  getcurrentAnswer(): Observable<any> {
    return this.currentAnswer$.asObservable();
  }
  getCurrentQuiz(): Observable<Quiz> {
    return this.currentQuiz$.asObservable();
  }


  allQuestionsAnswered(): boolean {
    const lastIndex = this.currentQuiz.questions.length;
    if (this.index === lastIndex || this.currentQuiz.questions.length === 0) {
      return true;
    }
    return false;
  }

  resetQuiz() {
    this.score = 0;
    this.index = 0;
    this.currentQuestion = this.currentQuiz.questions[this.index];
    this.answerResult$.next(undefined);
    this.currentQuiz$.next(this.currentQuiz);
    this.currentQuestion$.next(this.currentQuestion);
    //this.currentAnswer$.next(undefined);
    this.quizList.forEach((quiz) => {
      quiz.questions.forEach((question) => {
        question.answered = false;
      });
    });
  }
  public resetCountdown(countdown: any): void {
    this.stopCountdown();
    let remainingTime = this.deadline;
    // Met à jour le compte à rebours toutes les secondes
    this.intervalId = setInterval(() => {
      // Calcule le temps restant
      remainingTime--;
      console.log(remainingTime);
      this.remainingTime = remainingTime;
      // Si le temps est écoulé, arrête le compte à rebours
      if (remainingTime == 0) {
        this.stopCountdown();
        this.showDialogSubject.next(true);
      }
    }, 1000); // Exécute la fonction toutes les 1000ms (1s)
  }

  getRemainingTime(): Observable<number> {
    return new Observable<number>(observer => {
      setInterval(() => {
        observer.next(this.remainingTime);
      }, 1000);
    });
  }
  stopCountdown(): void {
    clearInterval(this.intervalId);
  }
  getShowDialog() : Observable<boolean>{
    return this.showDialog$;
  }
  setShowDialog(bool: boolean): void {
    this.showDialogSubject.next(bool);
  }
  emitRetryEvent(): void {
    this.retryEvent.next();
  }

  emitSkipEvent(): void {
    this.skipEvent.next();
  }
  triggerQuizEvent() {
    this.quizEventSubject.next();
    console.log("event triggered")
  }
}
