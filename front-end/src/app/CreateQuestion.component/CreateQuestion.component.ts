import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { GameService } from "../../services/GameService";
import {Quiz} from "../../models/quiz.model";
import {QuizService} from "../../services/QuizService";
import {ActivatedRoute} from "@angular/router";
import {Question} from "../../models/Question.model";
import {QuestionService} from "../../services/QuestionService";
import {FormGroupDirective} from "@angular/forms";
import {Answer} from "../../models/Question.model";
import { ChangeDetectorRef } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";



@Component({
  selector: 'app-CreateQuestion',
  templateUrl: './CreateQuestion.component.html',
  styleUrls: ['./CreateQuestion.component.scss']
})

//Remarque
//Classe à retravailler, pour l'instant impossible de jouer le quiz, il y a un problème avec la création des questions
//Toutes les questions sont de types searching, trouver un moyen d'intégrer l'image dans la question.
//Faire la question Puzzle pas du tout faite
//Reset l'image a chaque fois que showSearchingSection = false ou showPuzzleSection = false;


export class CreateQuestion implements OnInit, AfterViewInit{
  public questionForm!: FormGroup;
  showClassicSection = false;
  showSearchingSection = false;
  showPuzzleSection = false;
  showChronologicalSection = false;
  id = 5;
  questionType = ''; // Ajout de la variable questionType
  selectedImage: File | null = null;
  answers: Answer[] = [];

  answer1Order: number = 1;
  answer2Order: number = 2;
  answer3Order: number = 3;
  answer4Order: number = 4;
  puzzleSplitNumber: number = 0;

  showClassic() {
    this.showSearchingSection = false;
    this.showPuzzleSection = false;
    this.showChronologicalSection = false;
    if (this.showClassicSection == false) {
      this.showClassicSection = true;
      this.questionType = 'classic'; // Mise à jour du questionType
    } else {
      this.showClassicSection = false;
      this.questionType = '';
    }
  }

  showSearching() {
    this.showClassicSection = false;
    this.showPuzzleSection = false;
    this.showChronologicalSection = false;
    if (this.showSearchingSection === false) {
      this.showSearchingSection = true;
      this.questionType = 'searching';
    } else {
      this.showSearchingSection = false;
      this.questionType = '';
    }
  }

  showPuzzle() {
    this.showClassicSection = false;
    this.showSearchingSection = false;
    this.showChronologicalSection = false;
    if (this.showPuzzleSection === false) {
      this.showPuzzleSection = true;
      this.questionType = 'puzzle';
    } else {
      this.showPuzzleSection = false;
      this.questionType = '';
    }
  }

  showChronological() {
    this.showClassicSection = false;
    this.showSearchingSection = false;
    this.showPuzzleSection = false;
    if (this.showChronologicalSection === false) {
      this.showChronologicalSection = true;
      this.questionType = 'chronological';
    } else {
      this.showChronologicalSection = false;
      this.questionType = '';
    }
  }

  constructor(private formBuilder: FormBuilder, private questionService: QuestionService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
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
    const answers: Answer[] = [];

    switch (this.questionType) {
      case 'classic':
        for (let i = 1; i <= 4; i++) {
          answers.push({
            label: 'classical',
            value: this.questionForm.value[`answer${i}`],
            isCorrect: this.questionForm.value[`isCorrect${i}`]
          });// vérifier si ce sont bien des types answers qui sont push
        }

        const questionC: Question = {
          value: this.questionForm.value.question,
          label: "searching",
          id: this.id.toString(),
          answers: answers,
        };
        this.questionService.addQuestion(questionC);
        break;

      case 'chronological':
        for (let i = 1; i <= 4; i++) {
          answers.push({
            label: 'chronological',
            value: this.questionForm.value[`answer${i}`],
            isCorrect: this.questionForm.value[`isCorrect${i}`],
            order: this.id// à faire
          });
        }
        const questionCh: Question = {
          value: this.questionForm.value.question,
          label: "chronological",
          id: this.id.toString(),
          answers: answers,
        };
        this.questionService.addQuestion(questionCh);
        break;

      case 'searching':
        for (let i = 1; i <= 4; i++) {
          answers.push({
            label: 'searching',
            value: this.questionForm.value[`answer${i}`]
          });

        }
        if (this.questionType === 'searching' && this.selectedImage) {
          // Convertir l'image en une URL Base64 ou effectuer toute autre opération de traitement de l'image
          // pour obtenir le contenu à assigner à la propriété imageSearching de la question.
          // Par exemple, en utilisant FileReader pour lire le contenu de l'image sélectionnée :
          const reader = new FileReader();
          reader.onload = (event) => {
            questionS.imageSearching = event.target?.result as string;
          };

          reader.readAsDataURL(this.selectedImage);
        const questionS: Question = {
          value: this.questionForm.value.question,
          label: "searching",
          id: this.id.toString(),
          answers: answers,
          imageSearching: this.selectedImage? this.selectedImage.name :undefined, // Ajoutez ici la logique pour récupérer l'image searching
        };

          this.questionService.addQuestion(questionS);
          break;

          // puzzle à faire
          /*
        case 'puzzle':
          // Handle puzzle-specific logic
          break;

        default:
          break;
      }*/


        }
    }
    this.questionForm.reset();
    console.log('question ajoutée');
    this.showClassicSection = false;
    this.showSearchingSection = false;
    this.showPuzzleSection = false;
    this.showChronologicalSection = false;
  }

  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files!;
    if (files && files.length > 0) {
      this.selectedImage = files[0];
    }
  }


  getSelectedImageURL(): SafeUrl {
    return this.selectedImage ? this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.selectedImage)) : '';
  }

  ngAfterViewInit() {
    this.questionType = ''; // Déplacez la logique ici
  }


}
