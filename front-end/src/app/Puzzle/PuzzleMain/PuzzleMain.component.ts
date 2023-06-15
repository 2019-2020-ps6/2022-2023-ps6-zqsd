import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PuzzleResult} from "../PuzzleAnswer/PuzzleAnswer-Interface.component";
import {Answer, Question} from "../../../models/Question.model";
import {AnswerPuzzle1} from "../../../mocks/question.mock";
import {DisplayService} from "../../../services/DisplayService";
import * as _ from "underscore";
import {GameService} from "../../../services/GameService";

interface MyDictionary extends Record<number, number> {}

@Component({
  selector: 'app-puzzle-main',
  templateUrl: './PuzzleMain.component.html',
  styleUrls: ['./PuzzleMain.component.scss']
})
export class MainPuzzleComponent {

  @Input() currentQuestion: Question = {id:'', value: '',label:"",answers: [] as Answer[]};
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter<boolean>();

  currentAnswer: Answer[] = this.currentQuestion.answers;

  list_puzzlePieces_areCorrectlyPlaced : boolean[] = Array.from({length: this.currentAnswer.length}, () => false);
  orderOfPieces: number[] = Array.from({length: this.currentAnswer.length}, (_, i) => 0);

  public puzzleGridHeight: number = 500;
  public puzzlePieceHeight: number = this.puzzleGridHeight / Math.sqrt(this.currentAnswer.length);
  public headerHeight : number = 175;
  public spaceTop : number = 50;
  public spaceLeft : number = 50;
  public numberOfPicture : number = this.currentAnswer.length;

  private coordsAvailable: number[][] = [];

  public dictID_TO_Index : MyDictionary = {};
  public dictIndex_TO_ID : MyDictionary = {};
  public dictUnique : MyDictionary = {0 : 0, 1 : 0, 2 : 0, 3 : 0};
  public dictChecking : MyDictionary = {0 : 0, 1 : 0, 2 : 0, 3 : 0}; //0 false, 1 true

  constructor(public displayService : DisplayService, private gameService : GameService) {
    this.setSize();
    this.generateCoordAvailable();
    this.setupPuzzle();
    this.displayService.getHearderHeight().subscribe((headerHeight : number)=>{
      this.headerHeight = headerHeight;
    });
  }

  setupPuzzle(): void {
    this.currentAnswer = _.shuffle(this.currentAnswer);
    const coordDefault = this.generateFirstPositionXY();
    for (let i = 0; i < this.currentAnswer.length; i++) {
      var idOfThePicture: number = this.currentAnswer[i].order || 0;
      console.log("setupPuzzle");
      console.log(idOfThePicture);
      var id = this.generateIdNewPosition(this.generateImagePosition(coordDefault, i));
      this.dictID_TO_Index[id] = i;
      this.dictIndex_TO_ID[i] = id;
    }
  }

  ngOnInit(): void {
    console.log("init")
    console.log(this.currentAnswer);
    console.log(this.currentQuestion);
    console.log("init")
    this.setSize();
    this.generateCoordAvailable();
    this.setupPuzzle();
  }

  ngAfterViewInit(): void {
    this.currentAnswer = this.currentQuestion.answers;
    this.puzzleGridHeight = 500;
    this.puzzlePieceHeight = this.puzzleGridHeight / Math.sqrt(this.currentAnswer.length);
    this.headerHeight = 175;
    this.spaceTop = 50;
    this.spaceLeft = 50;
    this.numberOfPicture = this.currentAnswer.length;
    console.log("after")
    console.log(this.currentAnswer);
    console.log(this.currentQuestion);
    console.log("after")
    this.setSize();
    this.generateCoordAvailable();
    this.setupPuzzle();

  }


  onPiecePlacedCorrectly(indexPosition : number, indexPicture : number): void {
    if (this.currentAnswer[indexPicture].order == indexPosition){
      this.dictChecking[indexPicture] = 1;
    } else {
      this.dictChecking[indexPicture] = 0;
    }
    console.log("onPiecePlacedCorrectly");
    console.log(this.currentAnswer[indexPicture].order);
    console.log(indexPosition);
    console.log(this.dictChecking)
    for (let i = 0; i < this.currentAnswer.length; i++) {
      if (this.dictChecking[i] == 0) {
        return ;
      }
    }
    console.log("You won!");
    this.gameService.score++;
    this.answerEvent.emit(true);
  }

  launchVerificationPlacement(x : number, y : number) : void {
    console.log("launchVerificationPlacement");
    var indexPosition : number = 0;
    for (let i = 1; i < this.coordsAvailable[0].length; i++) {
      if (x == this.coordsAvailable[0][i]) {
        indexPosition += i;
      }
      if (y == this.coordsAvailable[1][i]) {
        indexPosition += i * Math.sqrt(this.numberOfPicture);
      }
    }
    console.log(indexPosition);
    this.onPiecePlacedCorrectly(indexPosition, this.dictID_TO_Index[this.generateIdNewPosition([x, y])]);
    return ;
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
    var id : number = Math.floor(coord[0]) * 100000 + coord[1];
    console.log("id");
    console.log(id);
    console.log(this.dictID_TO_Index);
    console.log(this.dictID_TO_Index[id]);
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
      this.launchVerificationPlacement(this.getCoordinateWithId(oldId)[0], this.getCoordinateWithId(oldId)[1])
    } else {
      delete this.dictID_TO_Index[oldId];
      delete this.dictIndex_TO_ID[oldIndexAssociated];
    }
    console.log(this.dictIndex_TO_ID);
  }

  calculateAfterDraging(puzzleChanged : PuzzleResult): void {
    if (puzzleChanged.draging){
      console.log("calculate after dragging");
      console.log(puzzleChanged);
      var indexOfThePicture : number = puzzleChanged.index;
      var X : number = puzzleChanged.x;
      var Y : number = puzzleChanged.y;
      var coord : number[] = this.getClosestBox(X, Y);
      var id : number = this.generateIdNewPosition(coord);
      var oldId : number = this.dictIndex_TO_ID[indexOfThePicture];
      if (id !== oldId) {
        this.switchPosition(indexOfThePicture, coord[0], coord[1]);
      }
      this.clock(indexOfThePicture);
      this.launchVerificationPlacement(coord[0], coord[1])
      //this.launchVerificationPlacement(coord[1], coord[0])
    }

  }

  clock(index : number) {
    this.dictUnique[index] += 1;
  }

  getCoordinateWithId(id : number): number[] {
    var y : number = id % 10000;
    var x : number = Math.floor((id - y) / 100000);

    return [x,y];
  }

}
