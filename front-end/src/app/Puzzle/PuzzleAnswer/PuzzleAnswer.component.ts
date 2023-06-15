import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AnswerPuzzle1} from "../../../mocks/question.mock";
import {PuzzleGridComponent} from "../PuzzleGrid/PuzzleGrid.component";
import {PuzzleResult} from "./PuzzleAnswer-Interface.component";

@Component({
  selector: 'app-puzzle-answer',
  templateUrl: './PuzzleAnswer.component.html',
  styleUrls: ['./PuzzleAnswer.component.scss']
})
export class PuzzleAnswerComponent implements OnInit {
  @Output() placedCorrectly = new EventEmitter<PuzzleResult>();


  @Input() imageUrl: string = AnswerPuzzle1[0].value;
  @Input() pictureCanvas?: string = AnswerPuzzle1[0].picture;
  @Input() indexOfThePicture: number = 0; //must start at 0 for the first one and thus 8 for the last one
  @Input() id : number = 0;
  @Input() puzzlePieceHeight: number = 10;
  @Input() unique: number = 0; //only to make sure noOnChange is refreshed

  public imageLeft: number = this.getCoordinateWithId(this.id)[0];
  public imageTop: number = this.getCoordinateWithId(this.id)[1];

  private startX: number = 0;
  private startY: number = 0;
  private isDragging = false;
  private hasBeenDragged: boolean = false;

  constructor(private elRef: ElementRef) {
  }

  public getSizePicture(): number {
    return this.puzzlePieceHeight;
  }

  ngOnInit(): void {
    this.imageLeft = this.getCoordinateWithId(this.id)[0];
    this.imageTop = this.getCoordinateWithId(this.id)[1];
  }

  ngOnChanges(): void {
    this.imageLeft = this.getCoordinateWithId(this.id)[0];
    this.imageTop = this.getCoordinateWithId(this.id)[1];
  }

  startDrag(event: MouseEvent): void {
    this.startX = event.clientX - this.imageLeft;
    this.startY = event.clientY - this.imageTop;
    this.isDragging = true;
  }

  drag(event: MouseEvent): void {
    if (!this.isDragging) {
      return;
    }
    if (this.imageTop !== event.clientY - this.startY || this.imageLeft !== event.clientX - this.startX) {
      this.hasBeenDragged = true;
    }
    this.imageLeft = event.clientX - this.startX;
    this.imageTop = event.clientY - this.startY;
  }

  get imagePosition(): string {
    return `${this.imageLeft}px ${this.imageTop}px`;
  }

  endDrag(): void {
    this.isDragging = false;
    const result: PuzzleResult = {
      draging: this.hasBeenDragged,
      index: this.indexOfThePicture,
      x : this.imageLeft,
      y : this.imageTop
    };
    this.hasBeenDragged = false;
    this.placedCorrectly.emit(result);
  }


  getCoordinateWithId(id : number): number[] {
    var y : number = id % 10000;
    var x : number = Math.floor((id - y) / 100000);

    return [x,y];
  }


}

