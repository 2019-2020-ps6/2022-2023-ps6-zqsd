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
  selector: 'app-retrievepassword',
  templateUrl: './RetrievePassword.component.html',
  styleUrls: ['./RetrievePassword.component.scss']
})

export class RetrievePasswordComponent implements OnInit {

  public connexionForm: FormGroup;
  private sizeText: number = PARAMETER.size;
  private topForm : number = 50;
  public pathImgPassword : string = "../../../assets/connexion/hiddenEye.png";
  public typePassword : string = "password";

  constructor (private location: Location,
               private router: Router,
               public formBuilder: FormBuilder, public userService: UserService,
               private elementRef: ElementRef, public parameterService : ParameterService) {
    this.connexionForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      Rpassword: ['', Validators.required],
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
    this.gestionnaryImgPassword();
  }

  setSizeText() {
    this.elementRef.nativeElement.querySelector('.form-retrievepassword').style.top = this.topForm + 'px';
    const elements = this.elementRef.nativeElement.querySelectorAll('.text_displayed');
    elements.forEach((element: HTMLElement) => {
      element.style.fontSize = this.sizeText + 'px';
    });
    this.gestionnaryLengthDisplayTextForInput();
    this.gestionnaryLengthDisplayButtonNavigation();
    this.gestionnaryTopOFNavigation();
  }


  gestionnaryLengthDisplayTextForInput() {
    const width_display_name = this.elementRef.nativeElement.querySelector('#retrievepassword-name_display').offsetWidth;
    const width_display_password = this.elementRef.nativeElement.querySelector('#retrievepassword-password_display').offsetWidth;
    const width_display_Rpassword = this.elementRef.nativeElement.querySelector('#retrievepassword-Rpassword_display').offsetWidth;
    const width_max_display = Math.max(width_display_name, width_display_password, width_display_Rpassword);
    this.elementRef.nativeElement.querySelector('#retrievepassword-name_display').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#retrievepassword-password_display').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#retrievepassword-Rpassword_display').style.width = width_max_display + 'px';
  }

  gestionnaryLengthDisplayButtonNavigation() {
    const width_display_back = this.elementRef.nativeElement.querySelector('#retrievepassword-leave-button').offsetWidth;
    const width_display_logIn = this.elementRef.nativeElement.querySelector('#retrievepassword-logIN-button').offsetWidth;
    const width_display_Inscription = this.elementRef.nativeElement.querySelector('#retrievepassword-inscription-button').offsetWidth;
    const width_max_display = Math.max(width_display_back, width_display_logIn, width_display_Inscription);
    this.elementRef.nativeElement.querySelector('#retrievepassword-leave-button').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#retrievepassword-logIN-button').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#retrievepassword-inscription-button').style.width = width_max_display + 'px';
  }

  gestionnaryTopOFNavigation() {
    const topNavigation = this.elementRef.nativeElement.querySelector('#connexion_navigate_button').offsetTop;
    const heightWindow = window.innerHeight;
    const NavigationHeight = this.elementRef.nativeElement.querySelector('#connexion_navigate_button').offsetHeight;
    const element = document.getElementById('header');
    if (element) {
      const heightHeader = element.offsetHeight
      this.elementRef.nativeElement.querySelector('#connexion_navigate_button').style.top = (heightWindow - topNavigation - NavigationHeight - 50 - heightHeader - this.topForm) + 'px';
    }
  }

  gestionnaryImgPassword() {
    const elementInputPassword = this.elementRef.nativeElement.querySelector('#retrievepassword-password');
    const elementInputRPassword = this.elementRef.nativeElement.querySelector('#retrievepassword-Rpassword');
    const elementPasswordBounding = elementInputPassword.getBoundingClientRect();
    const elementRPasswordBounding = elementInputRPassword.getBoundingClientRect();
    const heightInputPassword = elementInputPassword.offsetHeight;
    const topInputPassword = elementPasswordBounding.top;
    const topInputRPassword = elementRPasswordBounding.top;
    const widthInputPassword = elementInputPassword.offsetWidth;
    const leftInputPassword = elementInputPassword.offsetLeft;
    const element = this.elementRef.nativeElement.querySelector('#retrievepassword-image-password-eye');
    console.log(element);
    if (element) {
      element.style.height = (heightInputPassword) + 'px';
      element.style.left = (widthInputPassword+leftInputPassword) + 'px';
      element.style.top = (topInputRPassword-topInputPassword-heightInputPassword) + 'px';
    }
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


  clickOnLogIn() {
    const elementWarningMSGName = this.elementRef.nativeElement.querySelector('#retrievepassword-warning-msg-name');
    const elementWarningMSGPassword = this.elementRef.nativeElement.querySelector('#retrievepassword-warning-msg-password');
    const elementWarningMSGRPassword = this.elementRef.nativeElement.querySelector('#retrievepassword-warning-msg-Rpassword');
    if (this.userService.getAllUserDict().hasOwnProperty(this.connexionForm.value.name)) {
      elementWarningMSGName.style.visibility = 'hidden';
      if (this.connexionForm.value.password.length >= 3){
        elementWarningMSGPassword.style.visibility = 'hidden';
        if (this.connexionForm.value.Rpassword == this.connexionForm.value.password) {
          elementWarningMSGRPassword.style.visibility = 'hidden';
          this.router.navigateByUrl('/ConnexionPage');
        } else {
          elementWarningMSGRPassword.style.visibility = 'visible';
        }
      } else {
        elementWarningMSGPassword.style.visibility = 'visible';
      }
    } else {
      elementWarningMSGName.style.visibility = 'visible';
    }
  }

  clickOnEye() {
    if (this.pathImgPassword == "../../../assets/connexion/Eye.png") {
      this.pathImgPassword = "../../../assets/connexion/hiddenEye.png";
      this.typePassword = "password";
    } else {
      this.pathImgPassword = "../../../assets/connexion/Eye.png";
      this.typePassword = "text";
    }
  }

}
