import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PuzzleResult} from "../PuzzleAnswer/PuzzleAnswer-Interface.component";
import {Answer, Question} from "../../../models/Question.model";
import {AnswerPuzzle1} from "../../../mocks/question.mock";
import {DisplayService} from "../../../services/DisplayService";

@Component({
  selector: 'app-puzzle-main',
  templateUrl: './PuzzleMain.component.html',
  styleUrls: ['./PuzzleMain.component.scss']
})
export class MainPuzzleComponent {

  @Input() currentQuestion: Question = {id:'', value: '',label:"",answers: AnswerPuzzle1};
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();

  currentAnswer: Answer[] = this.currentQuestion.answers;

  list_puzzlePieces_areCorrectlyPlaced : boolean[] = Array.from({length: this.currentAnswer.length}, () => false);
  numberOfWrongPlaced: number = this.list_puzzlePieces_areCorrectlyPlaced.length;
  orderOfPieces: number[] = Array.from({length: this.currentAnswer.length}, (_, i) => 0);

  public puzzleGridHeight: number = 500;
  public puzzlePieceHeight: number = this.puzzleGridHeight / Math.sqrt(this.currentAnswer.length);
  public headerHeight : number = 175;
  public spaceTop : number = 50;
  public spaceLeft : number = 50;


  constructor(public displayService : DisplayService){
    this.displayService.getHearderHeight().subscribe((headerHeight : number)=>{
      this.headerHeight = headerHeight;
    });
  }


  checkIfOrderIsNumber(): void {
    for (let i = 0; i < this.orderOfPieces.length; i++) {
      let temporaryOrder = this.orderOfPieces[i];
      if (temporaryOrder !== undefined) {
        this.orderOfPieces[i] = temporaryOrder;
      }
    }
  }

  onInit(): void {
    this.checkIfOrderIsNumber();
  }

  onPiecePlacedCorrectly(result : PuzzleResult): void {
    this.list_puzzlePieces_areCorrectlyPlaced[result.index] = result.isCorrect;
    if (this.numberOfWrongPlaced === 0) {
      alert("You won!");
      this.answerEvent.emit(true);
    }
  }

  setSize() : void {
    var w = window.innerWidth ;
    var h = window.innerHeight - this.headerHeight;
    var size = Math.min(w,h);
    var sizePuzzle = size - 100;
    var subPiece = sizePuzzle / Math.sqrt(this.currentAnswer.length);
    this.puzzleGridHeight = sizePuzzle;
    this.puzzlePieceHeight = subPiece;
  }


}
