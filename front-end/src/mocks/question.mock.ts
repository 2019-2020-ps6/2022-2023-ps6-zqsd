import { Answer,Question,TextSearching } from '../models/Question.model';

export const AnswerorderHistory1: Answer[] = [
    {
        label: "order",
        value: "Invention de la poudre à canon",
        order : 1
    },
    {
        label: "order",
        value: "Découverte de l'Amérique",
        order : 2
    },

    {
      label: "order",
      value: "Découverte de Neptune",
      order : 3
  },
    {
        label: "order",
        value: "Chute du mur de Berlin",
        order : 4
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

export const AnswerClassic2: Answer[] = [
  { label: "classical", value: "Le pancréas", isCorrect: true },
  { label: "classical", value: "Le foie", isCorrect: false },
  { label: "classical", value: "Les reins", isCorrect: false },
  { label: "classical", value: "Le cerveau", isCorrect: false },
];

export const AnswerClassic3: Answer[] = [
  { label: "classical", value: "Solide, liquide et gazeux", isCorrect: true },
  { label: "classical", value: "Solide, liquide et plasma", isCorrect: false },
  { label: "classical", value: "Solide, gazeux et plasma", isCorrect: false },
  { label: "classical", value: "Liquide, gazeux et plasma", isCorrect: false },
];

export const AnswerClassic4: Answer[] = [
  { label: "classical", value: "Le blanc", isCorrect: false },
  { label: "classical", value: "Le noir", isCorrect: true },
  { label: "classical", value: "Le gris", isCorrect: false },
  { label: "classical", value: "Le transparent", isCorrect: false },
];
export const AnswerSearching1: Answer[] = [
    {
        label: "textSearching",
        value: "Blanc",
        isCorrect : true
    },
    {
      label: "textSearching",
      value: "Bleu",
      isCorrect : true
    },
    {
      label: "textSearching",
      value: "Noir",
      isCorrect : true
    },
    {
      label: "textSearching",
      value: "Marron",
      isCorrect : true
    }
];

export const AnswerPuzzle1: Answer[] = [
    {
        label: "puzzle",
        value: "assets/Puzzle/Github/image_part_001.jpg",
        isCorrect:false,
        order : 1
    },
    {
        label: "puzzle",
        value: "assets/Puzzle/Github/image_part_002.jpg",
        isCorrect:false,
        order : 2
    },
    {
        label: "puzzle",
        value: "assets/Puzzle/Github/image_part_003.jpg",
        isCorrect:false,
        order : 3
    },
    {
        label: "puzzle",
        value: "assets/Puzzle/Github/image_part_004.jpg",
        isCorrect:true,
        order : 4
    }
];




export const QuestionQuizz2: Question[] = [
  {
    id: '1',
    label: "classical",
    value: "Quels sont les 3 états de la matière ?",
    answers: AnswerClassic1,
  },
  {
    id: '5',
    label: "classical",
    value: "Qui a écrit 'Les Misérables' ?",
    answers: AnswerClassic2,
  },
  {
    id: '6',
    label: "classical",
    value: "Quelle est la capitale de l'Australie ?",
    answers: AnswerClassic3,
  },
  {
    id: '7',
    label: "classical",
    value: "Quelle est la plus haute montagne du monde ?",
    answers: AnswerClassic4,
  },
];

export const Question1: Question = {
  id: '1',
  label: "classical",
  value: "Quel est l'élément chimique de numéro atomique 1 ?",
  answers: [
    { label: "classical", value: "Hydrogène", isCorrect: true },
    { label: "classical", value: "Hélium", isCorrect: false },
    { label: "classical", value: "Carbone", isCorrect: false },
    { label: "classical", value: "Azote", isCorrect: false },
  ],
};


export const Question2: Question = {
  id: '2',
  label: "classical",
  value: "Quel est l'organe responsable de la production d'insuline dans le corps humain ?",
  answers: [
    { label: "classical", value: "Le pancréas", isCorrect: true },
    { label: "classical", value: "Le foie", isCorrect: false },
    { label: "classical", value: "Les reins", isCorrect: false },
    { label: "classical", value: "Le cerveau", isCorrect: false },
  ],
};

export const Question3: Question = {
  id: '3',
  label: "classical",
  value: "Quels sont les 3 états de la matière ?",
  answers: [
    { label: "classical", value: "Solide, liquide et gazeux", isCorrect: true },
    { label: "classical", value: "Solide, liquide et plasma", isCorrect: false },
    { label: "classical", value: "Solide, gazeux et plasma", isCorrect: false },
    { label: "classical", value: "Liquide, gazeux et plasma", isCorrect: false },
  ],
};

export const Question4: Question = {
  id: '4',
  label: "classical",
  value: "Quelle est la couleur de l'absence de couleur ?",
  answers: [
    { label: "classical", value: "Le noir", isCorrect: true },
    { label: "classical", value: "Le blanc", isCorrect: false },
    { label: "classical", value: "Le gris", isCorrect: false },
    { label: "classical", value: "Le transparent", isCorrect: false },
  ],
};

export const QuestionQuizz3: Question[] = [
  {
    id: '1',
    label: "classical",
    value: "Quel est l'élément chimique de numéro atomique 1 ?",
    answers: AnswerClassic1,
  },
  {
    id: '2',
    label: "classical",
    value: "Quel est l'organe responsable de la production d'insuline dans le corps humain ?",
    answers: AnswerClassic2,
  },
  {
    id: '3',
    label: "classical",
    value: "Quels sont les 3 états de la matière ?",
    answers: AnswerClassic3,
  },
  {
    id: '4',
    label: "classical",
    value: "Quelle est la couleur de l'absence de couleur ?",
    answers: AnswerClassic4,
  },
];

export const Question5: Question = {
  id: '5',
  label: "order",
  value: "faites un classement de la taille de ces objets dans l'ordre croissant ?",
  answers: [
    { label: "order", value: "Un atome", isCorrect: false },
    { label: "order", value: "Un tabouret", isCorrect: false },
    { label: "order", value: "Les Pyramides de Gizeh", isCorrect: true },
    { label: "order", value: "Une galaxie", isCorrect: false },
  ],
};

export const Question6: Question ={
    id: '4',
    label : "searching",
    value:"Quelle est la couleur du cheval d'Henri IV ?",
    imageSearching: "https://www.francoisdelapierre.fr/wp-content/uploads/2020/09/Henri-IV.jpg",
    answers: AnswerSearching1,

}


export const QuestionQuizz: Question[] = [
  {
      id: '1',
      label : "order",
      value:"Remettez dans l'ordre chronologique les éléments.",

      answers: AnswerorderHistory1,
  },
  {
      id: '2',
      label : "puzzle",
      value:"Completez le puzzle.",
      answers: AnswerPuzzle1,
  },
  {
      id: '3',
      label : "classical",
      value:"Quels sont les 3 états de la matière ?",
      answers: AnswerClassic1,
  },
  Question6,
  Question1,
  Question2,
  Question4,
  Question5

];
