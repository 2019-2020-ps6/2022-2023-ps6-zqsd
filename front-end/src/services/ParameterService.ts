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
import { Parameter } from 'src/models/Parameter/parameter.model';
import { PARAMETER } from 'src/mocks/Parameter/parameter.mock';

@Injectable({
    providedIn: 'root'
  })
  export class GameService {
  
    public currentSize$: BehaviorSubject<Parameter['size']> = new BehaviorSubject(PARAMETER.size)
    public currentMusic$: BehaviorSubject<Parameter['music']> = new BehaviorSubject(PARAMETER.music)

  
    constructor() {
    }
  
  
    getCurrentSize(): Observable<Parameter['size']> {
      return this.currentSize$.asObservable();
    }

    getCurrentMusic(): Observable<Parameter['music']> {
        return this.currentMusic$.asObservable();
    }
  
    setCurrentQuestion(musicEnable: Parameter['music']) {
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