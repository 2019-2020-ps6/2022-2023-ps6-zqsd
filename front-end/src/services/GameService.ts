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



@Injectable({
  providedIn: 'root'
})
export class GameService {

  public AllQuestions$: BehaviorSubject<Question> = new BehaviorSubject(QuestionQuizz[1]);
  public currentAnswer$: Subject<Answer> = new Subject<Answer>();
  public quizList: Quiz[] = QuizExample;
  public currentQuiz$: BehaviorSubject<Quiz> = new BehaviorSubject(Quiz1);
  public answerResult = AnswerClassic1[0].isCorrect;
  public quizList$ : BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizList);
  public answerResult$ : BehaviorSubject<boolean | undefined> = new BehaviorSubject(this.answerResult);


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

}
