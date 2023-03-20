import { Question } from './Question.model';


//Model for the quiz, possess a list of subQuiz that comport the question and answers

export interface Quiz {
    id: string;
    name: string;
    theme: string; //by default : classic
    questions: Question[]; //list of the different SubQuiz that will be show when this quiz in launch : ex chronological, etc...
}
