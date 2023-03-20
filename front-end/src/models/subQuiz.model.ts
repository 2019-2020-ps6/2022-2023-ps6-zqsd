export interface Answer {
    label:string
    value: string; //can be a link to a picture for puzzle label, an answer that will be display for chronological or classical label, or an answer that won't be show for analysis label
    isCorrect?: boolean; //use for the labels : classical, analysis
    order?: string; //use for the labels : chronological (1 is the first etc...), puzzle (1 is the puzzle piece that have to be place in the right top corner, see example below :)
}
/*
Puzzle 3x3 order :
1   2   3
4   5   6
7   8   9
*/

export interface Question {
    id:string;
    value : string;
}

export interface TextSearching {
    value : string;
}

export interface SubQuiz {
    id: string;
    label: string;
    question: Question;
    answers: Answer[];
    textSearchign?: TextSearching;
}


