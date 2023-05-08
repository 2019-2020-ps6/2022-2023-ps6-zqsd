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
  @Input() numberOfPicture: number = 9;
  @Input() indexOfThePicture: number = 0; //must start at 0 for the first one and thus 8 for the last one
  @Input() rightPosition: number = 0;
  @Input() spaceTop: number = 50;
  @Input() spaceLeft: number = 50;
  @Input() headerHeight: number = 175;
  @Input() puzzleGridHeight: number = 500;
  @Input() puzzlePieceHeight: number = this.puzzleGridHeight / Math.sqrt(this.numberOfPicture);

  public imageLeft: number = this.generateImagePosition(this.generateFirstPositionXY())[0];
  public imageTop: number = this.generateImagePosition(this.generateFirstPositionXY())[1];

  private startX: number = 0;
  private startY: number = 0;
  private isDragging = false;

  public coordsAvailable : number[][] = [];

  constructor(private elRef: ElementRef) {
    this.generateCoordAvailable();
  }

  generateFirstPositionXY(): number[] {
    var w = window.innerWidth - this.spaceLeft - this.puzzleGridHeight;
    var h = this.headerHeight + this.spaceTop;
    return [w, h];
  }

  generateImagePosition(coordinates : number[]): number[] {
    var x = coordinates[0] + this.puzzlePieceHeight * (this.indexOfThePicture % Math.sqrt(this.numberOfPicture));
    var y = coordinates[1] + this.puzzlePieceHeight * Math.floor(this.indexOfThePicture / Math.sqrt(this.numberOfPicture));
    return [x, y];
  }

  public getSizePicture(): number {
    return this.puzzlePieceHeight;
  }

  ngOnInit(): void {
    this.generateCoordAvailable();
    var coordinates : number[]  = this.generateFirstPositionXY();
    this.imageLeft = this.generateImagePosition(coordinates)[0];
    this.imageTop = this.generateImagePosition(coordinates)[1];
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
    this.imageLeft = event.clientX - this.startX;
    this.imageTop = event.clientY - this.startY;
  }

  get imagePosition(): string {
    return `${this.imageLeft}px ${this.imageTop}px`;
  }

  generateCoordAvailable(): void {
    var coord = [];
    var Y = [];
    var X = [];
    for (let i = 0; i < Math.sqrt(this.numberOfPicture); i++) {
      Y.push(this.spaceTop + this.puzzlePieceHeight * i);
      X.push(this.spaceLeft + this.puzzlePieceHeight * i);
    }
    coord.push(X)
    coord.push(Y)
    this.coordsAvailable = coord;
  }

  getClosestBox(x: number, y: number): number[] {
    var X : number = this.coordsAvailable[0][0];
    var Y : number = this.coordsAvailable[1][0];
    var xDiff : number = Math.abs(x - X);
    var yDiff : number = Math.abs(y - Y);
    for (let i = 1; i < this.coordsAvailable[0].length; i++) {
      if (Math.abs(x - this.coordsAvailable[0][i]) < xDiff) {
        X = this.coordsAvailable[0][i];
        xDiff = Math.abs(x - X);
      }
      if (Math.abs(y - this.coordsAvailable[1][i]) < yDiff) {
        Y = this.coordsAvailable[1][i];
        yDiff = Math.abs(y - Y);
      }
    }
    return [X, Y];
  }




  /**generate_all_coord() : number[][] {
    const x1 = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--x1');
    const y1 = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--y1');
    const x2 = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--x2');
    const y2 = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--y2');

    const sumX = parseInt(x2) - parseInt(x1);
    const sumY = parseInt(y2) - parseInt(y1);
    const sectionX = sumX / Math.sqrt(this.numberOfPicture);
    const sectionY = sumY / Math.sqrt(this.numberOfPicture);
    const coord = [];
    for (let i = 0; i < Math.sqrt(this.numberOfPicture); i++) {
      for (let j = 0; j < Math.sqrt(this.numberOfPicture); j++) {
        coord.push([parseInt(getComputedStyle(this.elRef.nativeElement).getPropertyValue('--x1')) + sectionX * j,
          parseInt(getComputedStyle(this.elRef.nativeElement).getPropertyValue('--y1')) + sectionY * i]);
      }
    }
    return coord;
  }

  getClosestBox(x: number, y: number): number[] {
    const coord = this.generate_all_coord();
    let min = Math.sqrt(Math.pow(x - coord[0][0], 2) + Math.pow(y - coord[0][1], 2))
    let index = 0;
    for (let i = 1; i < coord.length; i++) {
      const dist = Math.sqrt(Math.pow(x - coord[i][0], 2) + Math.pow(y - coord[i][1], 2));
      if (dist < min) {
        min = dist;
        index = i;
      }
    }
    return [index+1, coord[index+1][0], coord[index+1][1]];
    /**
     * Pour bien avoir :
     * 1 2 3
     * 4 5 6
     * 7 8 9
     * Exemple : si on a 9 cases, on a 3 lignes et 3 colonnes

  }*/


  endDrag(): void {
    this.isDragging = false;
    const coord = this.getClosestBox(this.imageLeft, this.imageTop);
    var id = this.generateIdNewPosition(coord);
    this.imageLeft = coord[1];
    this.imageTop = coord[2];
    const result: PuzzleResult = {
      isCorrect : coord[0] === this.rightPosition,
      index: this.indexOfThePicture,
      id: id
    };
    this.placedCorrectly.emit(result);
  }

  generateIdNewPosition(coord : number[]): number {
    var id : number = coord[0] * 100000 + coord[1];
    return id;
  }


}

