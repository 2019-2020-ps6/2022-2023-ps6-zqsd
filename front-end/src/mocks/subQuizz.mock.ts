import { SubQuiz,Answer,Question,TextSearching } from '../models/subQuiz.model';

export const AnswerChronologicalHistory1: Answer[] = [
    {
        label: "chronological",
        value: "Découverte de Neptune",
        order : "3"
    },
    {
        label: "chronological",
        value: "Invention de la poudre à canon",
        order : "1"
    },
    {
        label: "chronological",
        value: "Découverte de l'Amérique",
        order : "2"
    },
    {
        label: "chronological",
        value: "Chute du mur de Berlin",
        order : "4"
    }
];

export const AnswerClassic1: Answer[] = [
    {
        label: "classical",
        value: "Eau, Gaz, Solide",
        isCorrect : false
    },
    {
        label: "classical",
        value: "Ça n'existe pas",
        isCorrect : false
    },
    {
        label: "classical",
        value: "Feu, Terre, Air",
        isCorrect : false
    },
    {
        label: "classical",
        value: "Solide, Liquide, Gazeux",
        isCorrect : true
    }
];

export const AnswerSearching1: Answer[] = [
    {
        label: "textSearching",
        value: "Blanc",
        isCorrect : true
    }
];

export const AnswerPuzzle1: Answer[] = [
    {
        label: "puzzle",
        value: "linkImage1",
        order : "1"
    },
    {
        label: "puzzle",
        value: "linkImage2",
        order : "2"
    },
    {
        label: "puzzle",
        value: "linkImage3",
        order : "3"
    },
    {
        label: "puzzle",
        value: "linkImage4",
        order : "4"
    }
];

export const QuestionQuizz: Question[] = [
    {
        id:"1",
        value: "Remettez dans l'ordre chronologique les éléments.",
    },
    {
        id:"2",
        value: "Quels sont les 3 états de la matière ?"
    },
    {
        id:"3",
        value: "Quelle est la couleur du cheval d'Henri IV ?"
    },
    {
        id:"4",
        value: "Completez le puzzle."
    }
];

export const TextSearchingHenri4: TextSearching[] = [
    {
        value: "Henri IV, est un roi Français. Son cheval blanc s’appellait GrisCiel. Le blason d’Henri IV était principalement de couleur bleu et rouge.",
    }
];

export const SubQuizzList: SubQuiz[] = [
    {
        id: '1',
        label : "chronological",
        question: QuestionQuizz[0],
        answers: AnswerChronologicalHistory1,
    },
    {
        id: '2',
        label : "puzzle",
        question: QuestionQuizz[3],
        answers: AnswerPuzzle1,
    },
    {
        id: '3',
        label : "classical",
        question: QuestionQuizz[1],
        answers: AnswerClassic1,
    },
    {
        id: '4',
        label : "textSearching",
        question: QuestionQuizz[2],
        answers: AnswerSearching1,
    }
];
