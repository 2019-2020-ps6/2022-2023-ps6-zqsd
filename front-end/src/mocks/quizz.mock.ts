import { Quiz } from '../models/quiz.model';
import {QuestionQuizz} from './question.mock'
import {QuestionQuizz2} from './question.mock'
import {QuestionQuizz3} from './question.mock'

export const QuizExample: Quiz[] = [
    {
        id: "1",
        name: "Démonstration",
        theme : "Oral PS6",
        questions: QuestionQuizz
    },
    {
      id:"2",
      name:"Connaissances globales",
      theme:"Général",
      questions:QuestionQuizz2
    },
];


export const Quiz1 : Quiz = {
  id:"1",
  name:"Quiz1",
  theme:"classic",
  questions:QuestionQuizz
}

export const Quiz2 : Quiz = {
  id:"2",
  name:"Quiz2",
  theme:"classic",
  questions:QuestionQuizz2
}

export const Quiz3 : Quiz = {
  id:"3",
  name:"Quiz2",
  theme:"classic",
  questions:QuestionQuizz3
}


