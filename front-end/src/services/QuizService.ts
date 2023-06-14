import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QuizExample} from "../mocks/quizz.mock";
import {Question} from "../models/Question.model";
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../configs/server.config';
import {GameService} from "./GameService";

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

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */

  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QuizExample);
  private questions: Question[] = [];

  constructor( private _httpClient: HttpClient, private gameService: GameService) {
  }

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    //todo get the ids from the questions,
    return this._httpClient.post(serverUrl+"/quizzes",quiz).subscribe((quiz) => {
      console.log("quiz subscribed");
      this.gameService.updateQuizList();
    });
  }


  deleteQuiz(quiz: Quiz) {
    return this._httpClient.delete(serverUrl+"/quizzes/"+quiz.id).subscribe((quiz) => {
      console.log("quiz deleted");
      this.gameService.updateQuizList();
    });
  }

  getQuizList(): Quiz[] {
    return this.quizzes;
  }
}
