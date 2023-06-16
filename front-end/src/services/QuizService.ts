import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QuizExample} from "../mocks/quizz.mock";
import {Question} from "../models/Question.model";
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../configs/server.config';
import {GameService} from "./GameService";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = QuizExample;
  private quizzesBack: Quiz[] = [];


  private allQuiz: Record<string, Quiz> = {
    "1": QuizExample[0],
  };

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */

  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QuizExample);
  private questions: Question[] = [];
  public allQuizBack$: Observable<Quiz[]> = new Observable()


  constructor( private _httpClient: HttpClient, private gameService: GameService) {
    this.allQuizBack$ = _httpClient.get<Quiz[]>(serverUrl+"/quizzes")
    this.allQuizBack$.subscribe(x => {
      this.quizzesBack=x
      this.quizzesBack.forEach(u => {
        this.allQuiz[u.id] = u;
        this.gameService.updateQuizList(Object.values(this.allQuiz));
      })
    })

  }

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    //todo get the ids from the questions,
    return this._httpClient.post<Quiz>(serverUrl+"/quizzes",quiz).subscribe(quiz => {
      console.log("quiz subscribed");
      console.log(quiz);
      this.allQuiz[quiz.id]=quiz
      this.gameService.updateQuizList(Object.values(this.allQuiz));
    });
  }


  deleteQuiz(quiz: Quiz) {
    var deleteInDatabase : boolean = false;
    return this._httpClient.delete<Quiz>(serverUrl+"/quizzes/"+quiz.id).subscribe(quiz => {
      console.log("quiz deleted");
      deleteInDatabase = true;
      delete this.allQuiz[quiz.id]
      this.gameService.updateQuizList(Object.values(this.allQuiz));
    });
    if (!deleteInDatabase) {
      delete this.allQuiz[quiz.id]
      this.gameService.updateQuizList(Object.values(this.allQuiz));
    }
  }


  getQuizList(): Quiz[] {
    return this.quizzes;
  }
}
