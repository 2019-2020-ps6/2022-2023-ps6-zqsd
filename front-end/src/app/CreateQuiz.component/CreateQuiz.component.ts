import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { GameService } from "../../services/GameService";
import {Quiz} from "../../models/quiz.model";
import {QuizService} from "../../services/QuizService";
import {Router} from "@angular/router";
import {QuestionService} from "../../services/QuestionService";

@Component({
    selector: 'app-CreateQuiz',
    templateUrl: './CreateQuiz.component.html',
    styleUrls: ['./CreateQuiz.component.scss']
})

export class CreateQuiz implements OnInit {
  currentQuestion: number = 1;
  public quizForm: FormGroup;
  public theme_list = ['Actor', 'Sport', 'Music', 'Movie', 'TV Show', 'Video Game', 'Other'];
  numberOfQuestions: number = 0;
  buttons: number[] = [];
  blueButton: number = 1; // par défaut, le premier bouton est en bleu




  constructor(public formBuilder: FormBuilder, public quizService: QuizService,public questionService: QuestionService){
    // Form creation
    this.quizForm = this.formBuilder.group({
      name: ['', Validators.required],
      theme: ['', Validators.required],
      questions: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
    });
  }

  onSelect() {
    this.buttons = Array.from({length: this.numberOfQuestions}, (_, i) => i + 1);
    //1 question vide par défaut
  }


  onClick(buttonNumber: number) {
    this.currentQuestion = buttonNumber;
    this.blueButton = buttonNumber;
    console.log(`Bouton ${buttonNumber} cliqué.`);
    console.log(this.currentQuestion);
    console.log("nombre de questions actuel " + this.quizForm.value.questions.length);

  }

  createQuiz() {
    //supprime la 1ère question qui est vide
    this.quizForm.value.questions.splice(0, 1);
    const quiz = {
      name: this.quizForm.value.name,
      theme: this.quizForm.value.theme,
      questions: this.questionService.questions,
      id: "0",
    } as Quiz;
    this.quizService.addQuiz(quiz);
    console.log(quiz);
    this.quizForm.reset();
    this.questionService.resetQuestions();
  }

  nextQuestion() {
    if (this.quizForm.value.questions.length < this.numberOfQuestions+1) {
      this.currentQuestion++;
      this.onClick(this.currentQuestion);
    }
  }


  ngOnInit() {
  }

}
