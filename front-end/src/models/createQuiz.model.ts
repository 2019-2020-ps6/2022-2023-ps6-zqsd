export interface CreateQuiz {
    name:string;
    theme:string;
    question:string;
    answer:CreateAnswer[];
    textSearching?:string;
}

export interface CreateAnswer {
    value:string;
    order?:string;
    isCorrect?:string;
}