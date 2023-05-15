import { Injectable } from '@angular/core';
import {Question} from "../models/Question.model";
;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[] = [];

  constructor() { }

  addQuestion(question: Question) {
    this.questions.push(question);
  }

  resetQuestions() {
    this.questions = [];
  }

}
