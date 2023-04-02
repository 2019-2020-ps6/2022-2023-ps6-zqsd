import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PuzzleResult} from "../PuzzleAnswer/PuzzleAnswer-Interface.component";
import {Answer} from "../../../models/Question.model";
import {AnswerPuzzle1} from "../../../mocks/question.mock";

@Component({
  selector: 'app-puzzle-main',
  templateUrl: './PuzzleMain.component.html',
  styleUrls: ['./PuzzleMain.component.scss']
})
export class MainPuzzleComponent {

  @Input() currentAnswer: Answer[] = AnswerPuzzle1;
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();

  list_puzzlePieces_areCorrectlyPlaced : boolean[] = Array.from({length: this.currentAnswer.length}, () => false);
  numberOfWrongPlaced: number = this.list_puzzlePieces_areCorrectlyPlaced.length;
  orderOfPieces: number[] = Array.from({length: this.currentAnswer.length}, (_, i) => -1);

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


}
