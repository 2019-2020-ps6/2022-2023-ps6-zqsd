import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { GameService } from "../../services/GameService";

@Component({
    selector: 'app-CreateQuiz',
    templateUrl: './CreateQuiz.component.html',
    styleUrls: ['./CreateQuiz.component.scss']
}) 

export class CreateQuiz implements OnInit {

    public quizForm: FormGroup;
    public theme : string = '';

    constructor(public formBuilder: FormBuilder, public gameService: GameService) {
        this.quizForm = this.formBuilder.group({
          name: '',
          theme: '',   
        });
      }

    ngOnInit(): void {}

    public getTheme() : string {
        return this.theme;
    }
} 



