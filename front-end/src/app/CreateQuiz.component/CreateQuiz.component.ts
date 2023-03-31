import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { GameService } from "../../services/GameService";
import {Quiz} from "../../models/quiz.model";
import {QuizService} from "../../services/QuizService";

@Component({
    selector: 'app-CreateQuiz',
    templateUrl: './CreateQuiz.component.html',
    styleUrls: ['./CreateQuiz.component.scss']
})

export class CreateQuiz implements OnInit {

  public quizForm: FormGroup;
  public theme_list = ['Actor', 'Sport', 'Music', 'Movie', 'TV Show', 'Video Game', 'Other'];

  constructor(public formBuilder: FormBuilder, public quizService: QuizService) {
    // Form creation
    this.quizForm = this.formBuilder.group({
      name: ['', Validators.required],
      theme: ['', Validators.required],
      questions: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
      answers: this.formBuilder.array([
        this.formBuilder.group({isCorrect: false, answer: ''})
      ])
    });
  }

  ngOnInit() {
  }

  addQuiz() {
    const quiz = {
      name: this.quizForm.value.name,
      id: this.quizForm.value.id,
      theme: this.quizForm.value.theme,
      questions: this.quizForm.value.questions,
      answers: this.quizForm.value.answers
    } as Quiz;
    this.quizService.addQuiz(quiz);
    this.quizForm.reset();
  }

  addQuestion() {
    const questionControl = this.formBuilder.control('');
    const questionsArray = this.quizForm.controls['questions'] as FormArray;
    questionsArray.push(questionControl);
  }

  addAnswer() {
    const answer = this.formBuilder.group({
      isCorrect: false,
      answer: ''
    });
    const answersArray = this.quizForm.get('answers') as FormArray;
    answersArray.push(answer);
  }


  trackByFn(index: number, question: FormControl) {
    return index;
  }

  setFalse(index: number) {
    this.quizForm.get('answers')?.get(String(index))?.get('isCorrect')?.setValue(false);
  }

  setTrue(index: number) {
    this.quizForm.get('answers')?.get(String(index))?.get('isCorrect')?.setValue(true);
  }


}
