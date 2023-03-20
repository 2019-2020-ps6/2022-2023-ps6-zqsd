import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../configs/server.config';
import { QuizExample } from '../mocks/quizz.mock';
import { Quiz } from '../models/quiz.model';
import { Question } from 'src/models/Question.model';
import { QuestionQuizz } from 'src/mocks/question.mock';



@Injectable({
  providedIn: 'root'
})
export class GameService {
  public AllQuestions$: BehaviorSubject<Question> = new BehaviorSubject(QuestionQuizz[1]);
  public quizList: Quiz[] = QuizExample;
  public quizList$ : BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizList);


  constructor() {
  }


  getCurrentQuestion(): Observable<Question> {
    return this.AllQuestions$.asObservable();
  }

  setCurrentQuestion(question: Question) {
    this.AllQuestions$.next(question);
  }
  getQuizList(): Quiz[] {
    return this.quizList;
  }
  getCurrentAnswer(): Observable<any> {
    return this.AllQuestions$.asObservable();
  }
}
