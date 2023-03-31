import { Quiz } from '../models/quiz.model';
import {SubQuizzList} from './subQuizz.mock'

export const QuizExample: Quiz[] = [
    {
        id: "1",
        name: "Example",
        theme : "classic",
        questions: SubQuizzList
    }
];