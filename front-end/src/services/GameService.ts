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
  score = { goodAnswers: 0, badAnswers: 0 };

  constructor() {
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
    for (let i = 0; i < this.currentQuiz.questions.length; i++) {
      const question = this.currentQuiz.questions[i];
      if (!question.answered) {
        return false;
      }
    }
    return true;
  }




}
