import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Answer } from 'src/models/Question.model';
import { Router } from '@angular/router';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';

@Component({
  selector: 'app-GameAnswer',
  templateUrl: './GameAnswer.Component.html',
  styleUrls: ['./GameAnswer.Component.scss']
})
export class GameAnswerComponent implements OnInit {

  @Input() currentAnswer: Answer | undefined;
  @Output() answerEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public questionType : string="";
  public visuelRightAnswer : boolean = true;
  public visuelFalseAnswer : boolean = true;
  public selectedTime : number = 1000;

  selectedFont : string="";

  constructor(private gameService: GameService,private router: Router, private renderer : Renderer2, private elementRef : ElementRef, public advPService : AdvancedParameterService) { }

  getAnswerResult(): void {
    const buttonSound = new Audio();
    buttonSound.src = './assets/sounds/click.mp3';
    buttonSound.play();
    setTimeout(() => {
      if (this.currentAnswer != undefined) {
        this.answerEvent.emit(this.currentAnswer.isCorrect);
      } else {
        this.answerEvent.emit(false);
      }
    }, this.selectedTime);
  }

  ngOnInit(): void {
    this.gameService.getCurrentQuestion().subscribe((question) =>{
      this.questionType = question.label;
      console.log(this.questionType);
    })
    this.advPService.getCurrentRightAnswerAnimationOBS().subscribe((enableAnimation) => {
      if(this.currentAnswer != undefined && this.currentAnswer.isCorrect != undefined){
        this.visuelRightAnswer = enableAnimation && this.currentAnswer.isCorrect;
      }
    })
    this.advPService.getCurrentWrongAnswerAnimatinoOBS().subscribe((enableAnimation) => {
      if(this.currentAnswer != undefined && this.currentAnswer.isCorrect != undefined){
        this.visuelFalseAnswer = enableAnimation && !this.currentAnswer.isCorrect;
      }
    })
    this.advPService.getSelectedFont().subscribe((font) => {
      this.selectedFont = font;
    })
    this.advPService.getSelectedTime().subscribe((time) => {
      this.selectedTime = time;
    });
  }
  applyGreenBorder() {
    console.log(this.selectedTime)
    let bool = false;
    if(this.currentAnswer?.isCorrect != undefined){
      bool = this.currentAnswer.isCorrect;
    }
    this.visuelRightAnswer = this.advPService.getCurrentRightAnswerAnimation()&&bool;
    if(this.visuelRightAnswer){
      const buttonElement = this.elementRef.nativeElement.querySelector('#myButton');
      this.renderer.setStyle(buttonElement, 'border', '5px solid green');

      setTimeout(() => {
        this.renderer.removeStyle(buttonElement, 'border');
      }, this.selectedTime);
    }
  }
  applyRedBorder() {
    let bool = false;
    if(this.currentAnswer?.isCorrect != undefined){
      bool = this.currentAnswer.isCorrect;
    }
    this.visuelFalseAnswer = this.advPService.getCurrentWrongAnswerAnimation()&&!bool ;
    if(this.visuelFalseAnswer){
      const buttonElement = this.elementRef.nativeElement.querySelector('#myButton');
      this.renderer.setStyle(buttonElement, 'border', '5px solid red');

      setTimeout(() => {
        this.renderer.removeStyle(buttonElement, 'border');
      }, this.selectedTime);
    }
  }

  getSelectedFont(){
    return this.selectedFont;
  }
}

