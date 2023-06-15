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
  selectedImage: HTMLImageElement  | null = null;
  imageUrl: SafeUrl | null = null;

  answers: Answer[] = [];

  answer1Order: number = 1;
  answer2Order: number = 2;
  answer3Order: number = 3;
  answer4Order: number = 4;
  puzzleSplitNumber: number = 0;


  a : boolean = false;

  aa : HTMLCanvasElement | undefined;
  ab : HTMLCanvasElement | undefined;
  ac : HTMLCanvasElement | undefined;
  ad : HTMLCanvasElement | undefined;

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
      isCorrect4: [false],
      imageUrl: [''],
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
          label: "classical",
          id: this.id.toString(),
          answers: answers,
        };
        this.questionService.addQuestion(questionC);
        break;

      case 'chronological':
        const dictionary: Map<number, Answer> = new Map<number, Answer>();
        let key = 0;
        for (let i = 1; i <= 4; i++) {
          const newAnswer: Answer = {
            label: 'chronological',
            value: this.questionForm.value[`answer${i}`],
            order: this.id
          };
          switch (i) {
            case 1:
              key = this.answer1Order;
              break;
            case 2:
              key = this.answer2Order;
              break;
            case 3:
              key = this.answer3Order;
              break;
            default:
              key = this.answer4Order;
              break;
          }

          dictionary.set(key, newAnswer);
          console.log("question ajoutée");
        }
        for (let j = 1; j <= 4; j++) {
          const answer = dictionary.get(j);
          if (answer !== undefined) {
            answers[j-1] = answer;
          }
        }
        const questionCh: Question = {
          value: this.questionForm.value.question,
          label: "order",
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
        if (this.questionType === 'searching' && this.questionForm.value.imageUrl !== '') {
            const questionS: Question = {
                    value: this.questionForm.value.question,
                    label: "searching",
                    id: this.id.toString(),
                    answers: answers,
                    imageSearching: this.questionForm.value.imageUrl.toString(),
                  };
                  console.log(questionS);
                  this.questionService.addQuestion(questionS);
                }
        else {
          console.log("ajouter une image")
        };
        break;
    case 'puzzle':
      if (this.puzzleSplitNumber > 1 && this.selectedImage) {
        const largeurPartie: number = this.selectedImage.width / this.puzzleSplitNumber;
        const hauteurPartie: number = this.selectedImage.height / this.puzzleSplitNumber;
        const partiesImage: string[] = [];
        for (let i = 0; i < this.puzzleSplitNumber; i++) {
          for (let j = 0; j < this.puzzleSplitNumber; j++) {
            const canvas = document.createElement('canvas');
            canvas.width = largeurPartie;
            canvas.height = hauteurPartie;
            const context = canvas.getContext('2d');
            if (context) {
              context.drawImage(
                this.selectedImage,
                i * largeurPartie,
                j * hauteurPartie,
                largeurPartie,
                hauteurPartie,
                0,
                0,
                largeurPartie,
                hauteurPartie
              );
            }
            const base64 = canvas.toDataURL('image/jpeg', 0.8); // Utilisation de la compression PNG sans perte
            partiesImage.push(base64);
            console.log(i + j*this.puzzleSplitNumber);
            console.log(base64);
            answers.push({
              label: "puzzle",
              value: "1",
              isCorrect:false,
              order : i + j*this.puzzleSplitNumber,
              picture: partiesImage[partiesImage.length - 1],
            });
          }
        }
        const questionS: Question = {
          value: "a",
          label: "puzzle",
          id: this.id.toString(),
          answers: answers,
        };
        this.questionService.addQuestion(questionS);
      }
      break;
    default:
      break;
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
      const imageFile = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
      };
      reader.readAsDataURL(imageFile);
    }
  }


  ngAfterViewInit() {
    this.questionType = '';
  }


}
