import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { GameService } from "../../services/GameService";
import {Quiz} from "../../models/quiz.model";
import {QuizService} from "../../services/QuizService";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../../models/Question.model";
import {QuestionService} from "../../services/QuestionService";
import {FormGroupDirective} from "@angular/forms";



@Component({
  selector: 'app-CreateQuestion',
  templateUrl: './CreateQuestion.component.html',
  styleUrls: ['./CreateQuestion.component.scss']
})

export class CreateQuestion implements OnInit {
  public questionForm!: FormGroup;
  public theme_list = ['Actor', 'Sport', 'Music', 'Movie', 'TV Show', 'Video Game', 'Other'];
  showClassicSection = false;
  showAnalysisSection = false;
  showPuzzleSection = false;
  showChronologicalSection = false;
  id = 5;

  showClassic() {
    this.showAnalysisSection = false;
    this.showPuzzleSection = false;
    this.showChronologicalSection = false;
    if (this.showClassicSection == false) {
      this.showClassicSection = true;
    } else {
      this.showClassicSection = false;
    }
  }

  showAnalysis() {
    this.showClassicSection = false;
    this.showPuzzleSection = false;
    this.showChronologicalSection = false;
    this.showAnalysisSection = true;
  }

  showPuzzle() {
    this.showAnalysisSection = false;
    this.showClassicSection = false;
    this.showChronologicalSection = false;
    this.showPuzzleSection = true;
  }

  showChronological() {
    this.showAnalysisSection = false;
    this.showPuzzleSection = false;
    this.showClassicSection = false;
    this.showChronologicalSection = true;
  }

  constructor(private formBuilder: FormBuilder, private questionService: QuestionService, private route: ActivatedRoute) {
    this.questionForm = this.formBuilder.group({
      question: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      isCorrect1: [false],
      isCorrect2: [false],
      isCorrect3: [false],
      isCorrect4: [false]
    });
  }


  ngOnInit() {
  }

  setAnswer(index: number, isCorrect: boolean) {
    const controlName = `isCorrect${index}`;
    this.questionForm.get(controlName)?.setValue(isCorrect);
  }

  addQuestion() {
    this.id++;
    const answers = [];
    for (let i = 1; i <= 4; i++) {
      answers.push({
        value: this.questionForm.value[`answer${i}`],
        isCorrect: this.questionForm.value[`isCorrect${i}`],
        label: "classical",
      });
    }
    const question: Question = {
      value: this.questionForm.value.question,
      label: "classical",
      id:this.id.toString(),
      answers: answers // récupérer les réponses
    };
    this.questionService.addQuestion(question);
    this.questionForm.reset();
    console.log('question ajoutée')
  }

}
