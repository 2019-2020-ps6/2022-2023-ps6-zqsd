import { SubQuiz } from './subQuiz.model';


//Model for the quiz, possess a list of subQuiz that comport the question and answers

export interface Quiz {
    id: number;
    name: string;
    theme: string; //by default : classic
    questions: SubQuiz[]; //list of the different SubQuiz that will be show when this quiz in launch : ex chronological, etc...
}
