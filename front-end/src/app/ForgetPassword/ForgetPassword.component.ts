import { Component, OnInit, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/UserService";
import {ParameterService} from "../../services/Parameter/ParameterService";
import {Question} from "../../models/Question.model";
import {PARAMETER} from "../../mocks/Parameter/parameter.mock";
import {Parameter} from "../../models/Parameter/parameter.model";
import {Location} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-Connexion',
  templateUrl: './ForgetPassword.component.html',
  styleUrls: ['./ForgetPassword.component.scss']
})

export class ForgetPasswordComponent implements OnInit {

  public forgetpasswordForm: FormGroup;
  private sizeText: number = PARAMETER.size;
  private topForm : number = 50;
  public pathImgPassword : string = "../../../assets/connexion/hiddenEye.png";
  public typePassword : string = "password";
  public userPassword : string = "";
  public leftButtonNav : string = "Confirmer";

  constructor (private location: Location,
               private router: Router,
               public formBuilder: FormBuilder, public userService: UserService,
               private elementRef: ElementRef, public parameterService : ParameterService) {
    this.forgetpasswordForm = this.formBuilder.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      id: ['', Validators.required],
    });
    this.parameterService.currentSize$.subscribe((size: number) => {
      this.sizeText = size;
      this.setSizeText();
    })
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setSizeText();
  }

  setSizeText() {
    this.elementRef.nativeElement.querySelector('.form-forgetpassword').style.top = this.topForm + 'px';
    const elements = this.elementRef.nativeElement.querySelectorAll('.text_displayed');
    elements.forEach((element: HTMLElement) => {
      element.style.fontSize = this.sizeText + 'px';
    });
    this.gestionnaryLengthDisplayTextForInput();
    this.gestionnaryLengthDisplayButtonNavigation();
  }


  gestionnaryLengthDisplayTextForInput() {
    const width_display_name = this.elementRef.nativeElement.querySelector('#forgetpassword-name_display').offsetWidth;
    const width_displaysurname = this.elementRef.nativeElement.querySelector('#forgetpassword-surname_display').offsetWidth;
    const width_display_id = this.elementRef.nativeElement.querySelector('#forgetpassword-id_display').offsetWidth;
    const width_max_display = Math.max(width_display_name, width_displaysurname, width_display_id);
    this.elementRef.nativeElement.querySelector('#forgetpassword-name_display').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#forgetpassword-surname_display').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#forgetpassword-id_display').style.width = width_max_display + 'px';
  }

  gestionnaryLengthDisplayButtonNavigation() {
    const width_display_back = this.elementRef.nativeElement.querySelector('#forgetpassword-leave-button').offsetWidth;
    const width_display_logIn = this.elementRef.nativeElement.querySelector('#forgetpassword-logIN-button').offsetWidth;
    const width_display_Inscription = this.elementRef.nativeElement.querySelector('#forgetpassword-inscription-button').offsetWidth;
    const width_max_display = Math.max(width_display_back, width_display_logIn, width_display_Inscription);
    this.elementRef.nativeElement.querySelector('#forgetpassword-leave-button').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#forgetpassword-logIN-button').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#forgetpassword-inscription-button').style.width = width_max_display + 'px';
  }


  resetDefaultBackgroundButton(targetElement : string) {
    const element = this.elementRef.nativeElement.querySelector(targetElement);
    if (element) {
      element.style.backgroundColor = 'rgba(30,30,30,1)';
    }
  }


  changeBackgroundButton(targetElement : string) {
    const element = this.elementRef.nativeElement.querySelector(targetElement);
    if (element) {
      element.style.backgroundColor = 'rgba(30,30,30,0.7)';
    }
  }

  clickOnInscription() {
    if (this.leftButtonNav == "Confirmer") {
      const elementWarningMSGName = this.elementRef.nativeElement.querySelector('#forgetpassword-warning-msg-name');
      const elementWarningMSGId = this.elementRef.nativeElement.querySelector('#forgetpassword-warning-msg-id');
      if (this.userService.getAllUserDict().hasOwnProperty(this.forgetpasswordForm.value.id)) {
        elementWarningMSGId.style.visibility = 'hidden';
        const userAssociated = this.userService.getAllUserDict()[this.forgetpasswordForm.value.id];
        if (userAssociated.prenom == this.forgetpasswordForm.value.surname.toLowerCase() && userAssociated.nom == this.forgetpasswordForm.value.name.toLowerCase()) {
          elementWarningMSGName.style.visibility = 'hidden';
          this.userPassword = userAssociated.motDePasse;
          this.elementRef.nativeElement.querySelector('#forgetpassword-show-password-section').style.visibility = 'visible';
          this.leftButtonNav = "Modifier le mot de passe";
        } else {
          elementWarningMSGName.style.visibility = 'visible';
        }
      } else {
        elementWarningMSGId.style.visibility = 'visible';
      }
    } else {
      this.router.navigate(['/retrievepassword']);
    }
  }
}
