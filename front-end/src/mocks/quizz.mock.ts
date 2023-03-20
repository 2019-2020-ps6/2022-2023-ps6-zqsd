import { Quiz } from '../models/quiz.model';
import {QuestionQuizz} from './question.mock'

export const QuizExample: Quiz[] = [
    {
        id: "1",
        name: "Example",
        theme : "classic",
        questions: QuestionQuizz
    }
];