import { GameAnswer_Component } from './../app/GameAnswer.component/GameAnswer.Component';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../configs/server.config';
import { QuizExample } from '../mocks/quizz.mock';
import { Quiz } from '../models/quiz.model';



@Injectable({
  providedIn: 'root'
})
export class GameService {
  public currentQuestion$: Subject<any> = new Subject<any>();
  public currentAnswer$: Subject<any> = new Subject<any>();
  public quizList: Quiz[] = QuizExample;
  public answerResult = ;
  public quizList$ : BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizList);
  public answerResult$ : BehaviorSubject<boolean> = new BehaviorSubject(this.answerResult);


  constructor() {
  }


  getCurrentQuestion(): Observable<any> {
    return this.currentQuestion$.asObservable();
  }

  setCurrentQuestion(question: any) {
    this.currentQuestion$.next(question);
  }
  getQuizList(): Quiz[] {
    return this.quizList;
  }
  getCurrentAnswer(): Observable<any> {
    return this.currentAnswer$.asObservable();
  }

  getAnswerResult(): Observable<any> {
    return this.answerResult$.asObservable();
  }

}
