import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../configs/server.config';
import { QuizExample } from '../mocks/quizz.mock';
import { Quiz } from '../models/quiz.model';
import { Question } from 'src/models/subQuiz.model';



@Injectable({
  providedIn: 'root'
})
export class GameService {
  public currentQuestion$: Subject<Question> = new Subject<Question>();
  public quizList: Quiz[] = QuizExample;
  public quizList$ : BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizList);

  private quizUrl = serverUrl + '/quiz';

  constructor(private http: HttpClient) {
    this.retrieveQuizzes();
  }

  retrieveQuizzes(): void {
    this.http.get<Quiz[]>(this.quizUrl).subscribe((quizz) => {
      this.quizList = quizz;
      this.quizList$.next(this.quizList);
    });
  }


  getCurrentQuestion(): Observable<Question> {
    return this.currentQuestion$.asObservable();
  }

  setCurrentQuestion(question: Question) {
    this.currentQuestion$.next(question);
  }
  getQuizList(): Quiz[] {
    return this.quizList;
  }
  getCurrentAnswer(): Observable<any> {
    return this.currentQuestion$.asObservable();
  }
}
