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
  public quizList: Quiz[] = QuizExample;
  public quizList$ : BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizList);


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
    return this.currentQuestion$.asObservable();
  }

  add(quiz:Quiz) : void {
    this.quizList.push(quiz)
    this.quizList$.next(this.quizList)
  }
}
