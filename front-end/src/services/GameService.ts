import { GamepageComponent } from './../app/Gamepage.component/GamePage.Component';
import { Quiz1 } from './../mocks/quizz.mock';
import { AnswerClassic1 } from './../mocks/question.mock';
import { GameAnswerComponent } from './../app/GameAnswer.component/GameAnswer.Component';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../configs/server.config';
import { QuizExample } from '../mocks/quizz.mock';
import { Quiz } from '../models/quiz.model';
import { Question,Answer } from 'src/models/Question.model';
import { QuestionQuizz } from 'src/mocks/question.mock';
import { AdvancedParameterService } from './Parameter/AdvancedParameterService';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  public quizList: Quiz[] = QuizExample;

  public answerResult = AnswerClassic1[0].isCorrect;
  public quizList$ : BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizList);
  currentQuiz: Quiz=this.quizList[0];
  public currentQuiz$: BehaviorSubject<Quiz> = new BehaviorSubject<Quiz>(this.currentQuiz)
  private index:number=0;
  private currentQuestion: Question=this.currentQuiz.questions[this.index];
  public currentQuestion$: BehaviorSubject<Question> = new BehaviorSubject(this.currentQuestion);
  public currentAnswer$: Subject<Answer> = new Subject<Answer>();
  public answerResult$ : BehaviorSubject<boolean | undefined> = new BehaviorSubject(this.answerResult);
  score = 0;

  public deadline: number = 30;
  public intervalId: any;
  public remainingTime: number = 30;
  public remainingTime$: BehaviorSubject<number> = new BehaviorSubject(this.remainingTime);

  constructor(private aps : AdvancedParameterService) {
    // Abonnez-vous aux changements de deadline
    this.aps.getCurrentChronometerOBS().subscribe((deadline) => {
      // Réinitialise le compte à rebours avec la nouvelle deadline
      this.deadline =deadline;
    });
  }


  getCurrentQuestion(): Observable<Question> {
    return this.currentQuestion$.asObservable();
  }

  nextQuestion(): number  {
    this.setCurrentQuestion(this.index+1)
    this.index+=1;
    return this.index;
  }

  setCurrentQuestion(index: number) {
    const question = this.currentQuiz.questions[index];
    console.log(index);

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

  add(quiz:Quiz) : void {
    this.quizList.push(quiz)
    this.quizList$.next(this.quizList)
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
    this.quizList$.next(this.quizList);
    this.quizList.forEach((quiz) => {
      quiz.questions.forEach((question) => {
        question.answered = false;
      });
    });
  }
  public resetCountdown(countdown: any): void {
    clearInterval(this.intervalId);
    let remainingTime = this.deadline;
    // Met à jour le compte à rebours toutes les secondes
    this.intervalId = setInterval(() => {
      // Calcule le temps restant
      remainingTime--;
      console.log(remainingTime);
      this.remainingTime = remainingTime;
      // Si le temps est écoulé, arrête le compte à rebours
      if (remainingTime == 0) {
        clearInterval(this.intervalId);
        this.nextQuestion();
        this.resetCountdown(countdown);
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






}
