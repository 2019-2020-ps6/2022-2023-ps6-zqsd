import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { GameService } from "../../services/GameService";

@Component({
    selector: 'app-CreateQuestion',
    templateUrl: './CreateQuestion.component.html',
    styleUrls: ['./CreateQuestion.component.scss']
})

export class CreateQuestion /*implements OnInit*/ {

   /* public quizForm: FormGroup;

    constructor(public formBuilder: FormBuilder, public gameService: GameService, theme : string) {
        switch(theme){
          case "classical":
            this.quizForm = this.formBuilder.group({
              question: '',
              falseAnswer1: '',
              falseAnswer2: '',
              falseAnswer3: '',
              rightAnswer: '',
            });
            break;
          case "chronological" :
            this.quizForm = this.formBuilder.group({
              question: '',
              firstAsnwer: '',
              secondAnswer: '',
              thirdAnswer: '',
              fourthAnswer: '',
            });
            break;
          case "analysis" :
              this.quizForm = this.formBuilder.group({
                question: '',
                answer: '',
                textSearching: '',
              });
              break;
          default :
            this.quizForm = this.formBuilder.group({
              question: '',
              picture: '',
              size: '',   //pour découper l'image en sizexsize
            });
        }
      }

    ngOnInit(): void {}*/
}
