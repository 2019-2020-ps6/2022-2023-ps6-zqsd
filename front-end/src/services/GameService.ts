import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { Quiz } from '../models/quiz.model';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  public currentQuestion$: Subject<any> = new Subject<any>();
  public quizList: Quiz[] = QUIZ_LIST;

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
}
