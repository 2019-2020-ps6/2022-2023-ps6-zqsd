import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PuzzleResult} from "../PuzzleAnswer/PuzzleAnswer-Interface.component";
import {Answer, Question} from "../../../models/Question.model";
import {AnswerPuzzle1} from "../../../mocks/question.mock";
import {DisplayService} from "../../../services/DisplayService";
import * as _ from "underscore";

interface MyDictionary extends Record<number, number> {}

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
  public numberOfPicture : number = this.currentAnswer.length;

  private coordsAvailable: number[][] = [];

  public copyAnswer = this.currentAnswer.slice();
  public dictID_TO_Index : MyDictionary = {};
  public dictIndex_TO_ID : MyDictionary = {};

  constructor(public displayService : DisplayService){
    this.setSize();
    this.generateCoordAvailable();
    this.setupPuzzle();
    this.displayService.getHearderHeight().subscribe((headerHeight : number)=>{
      this.headerHeight = headerHeight;
    });
  }

  setupPuzzle(): void {
    this.copyAnswer = _.shuffle(this.copyAnswer);
    const coordDefault = this.generateFirstPositionXY();
    for (let i = 0; i < this.copyAnswer.length; i++) {
      var id = this.generateIdNewPosition(this.generateImagePosition(coordDefault, i));
      this.dictID_TO_Index[id] = i;
      this.dictIndex_TO_ID[i] = id;
    }
  }

  onInit(): void {
    this.setSize();
    this.generateCoordAvailable();
    this.setupPuzzle();
  }

  onPiecePlacedCorrectly(result : PuzzleResult): void {
    //this.list_puzzlePieces_areCorrectlyPlaced[result.index] = result.isCorrect;
    if (this.numberOfWrongPlaced === 0) {
      alert("You won!");
      this.answerEvent.emit(true);
    }
  }

  setSize() : void {
    var w = (window.innerWidth - this.spaceLeft * 2)/2 ;
    var h = window.innerHeight - this.headerHeight;
    var size = Math.min(w,h);
    var sizePuzzle = size - 100;
    var subPiece = sizePuzzle / Math.sqrt(this.numberOfPicture);
    this.puzzleGridHeight = sizePuzzle;
    this.puzzlePieceHeight = subPiece;
  }

  generateFirstPositionXY(): number[] {
    var w = window.innerWidth - this.spaceLeft - this.puzzleGridHeight;
    var h = this.headerHeight + this.spaceTop;
    return [w, h];
  }

  generateImagePosition(coordinates : number[], indexOfThePicture : number): number[] {
    var x = coordinates[0] + this.puzzlePieceHeight * (indexOfThePicture % Math.sqrt(this.numberOfPicture));
    var y = coordinates[1] + this.puzzlePieceHeight * Math.floor(indexOfThePicture / Math.sqrt(this.numberOfPicture));
    return [x, y];
  }

  generateIdNewPosition(coord : number[]): number {
    var id : number = coord[0] * 100000 + coord[1];
    return id;
  }

  generateCoordAvailable(): void {
    var coord = [];
    var Y = [];
    var X = [];
    for (let i = 0; i < Math.sqrt(this.numberOfPicture); i++) {
      Y.push(this.spaceTop + this.headerHeight + this.puzzlePieceHeight * i);
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

  switchPosition(indexOfThePicture : number, X : number, Y : number): void {
    console.log(this.dictIndex_TO_ID);
    var id : number = this.generateIdNewPosition([X, Y]);
    var oldIndexAssociated : number = this.dictID_TO_Index[id];
    var oldId : number = this.dictIndex_TO_ID[indexOfThePicture];
    this.dictID_TO_Index[id] = indexOfThePicture;
    this.dictIndex_TO_ID[indexOfThePicture] = id;
    console.log(oldIndexAssociated)
    console.log(oldId)
    if (oldIndexAssociated in this.dictIndex_TO_ID){
      this.dictID_TO_Index[oldId] = oldIndexAssociated;
      this.dictIndex_TO_ID[oldIndexAssociated] = oldId;
    }
    console.log(this.dictIndex_TO_ID);
  }

  calculateAfterDraging(puzzleChanged : PuzzleResult): void {
    if (puzzleChanged.draging){
      var indexOfThePicture : number = puzzleChanged.index;
      var X : number = puzzleChanged.x;
      var Y : number = puzzleChanged.y;
      console.log(X, Y);
      var coord : number[] = this.getClosestBox(X, Y);
      console.log(coord);
      var id : number = this.generateIdNewPosition(coord);
      console.log(id);
      var oldId : number = this.dictIndex_TO_ID[indexOfThePicture];
      console.log(oldId);
      console.log(id !== oldId);
      if (id !== oldId) {
        this.switchPosition(indexOfThePicture, coord[0], coord[1]);
      }
    }
  }



}
