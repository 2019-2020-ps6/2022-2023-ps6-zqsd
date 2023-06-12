import { Injectable } from '@angular/core';
import {Question} from "../models/Question.model";
import {HttpClient} from "@angular/common/http";
import {serverUrl} from "../configs/server.config";
;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  idQuestions: String[] = [];


  constructor(private _httpClient: HttpClient) { }

  addQuestion(question: Question) {
    return this._httpClient.post<Question>(serverUrl+"/questions",question).subscribe((question) => {
      this.idQuestions.push(question.id.toString());
      console.log("question subscribed + id ajouté à la liste");
    });
  }

  resetQuestions() {
    this.idQuestions = [];
  }

}
