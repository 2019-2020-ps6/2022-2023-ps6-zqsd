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
  templateUrl: './Inscription.component.html',
  styleUrls: ['./Inscription.component.scss']
})

export class InscriptionComponent implements OnInit {

  public inscriptionForm: FormGroup;
  private sizeText: number = PARAMETER.size;
  private topForm : number = 50;
  previousUrl: string = "";
  public pathImgPassword : string = "../../../assets/connexion/hiddenEye.png";
  public typePassword : string = "password";

  constructor (private location: Location,
               private router: Router,
               public formBuilder: FormBuilder, public userService: UserService,
               private elementRef: ElementRef, public parameterService : ParameterService) {
      this.router.events.pipe(filter(this.filterEvent)).subscribe((event: NavigationEnd) => {
        this.previousUrl = (event as NavigationEnd).url;
      });

    this.inscriptionForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
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
    this.elementRef.nativeElement.querySelector('.form-inscription').style.top = this.topForm + 'px';
    const elements = this.elementRef.nativeElement.querySelectorAll('.text_displayed');
    elements.forEach((element: HTMLElement) => {
      element.style.fontSize = this.sizeText + 'px';
    });
    this.gestionnaryLengthDisplayTextForInput();
    this.gestionnaryLengthDisplayButtonNavigation();
  }


  gestionnaryLengthDisplayTextForInput() {
    const width_display_name = this.elementRef.nativeElement.querySelector('#inscription-name_display').offsetWidth;
    const width_display_password = this.elementRef.nativeElement.querySelector('#inscription-password_display').offsetWidth;
    const width_displaysurname = this.elementRef.nativeElement.querySelector('#inscription-surname_display').offsetWidth;
    const width_display_Rpassword = this.elementRef.nativeElement.querySelector('#inscription-Rpassword_display').offsetWidth;
    const width_display_id = this.elementRef.nativeElement.querySelector('#inscription-id_display').offsetWidth;
    const width_max_display = Math.max(width_display_name, width_display_password, width_displaysurname, width_display_Rpassword, width_display_id);
    this.elementRef.nativeElement.querySelector('#inscription-name_display').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#inscription-password_display').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#inscription-surname_display').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#inscription-Rpassword_display').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#inscription-id_display').style.width = width_max_display + 'px';
  }

  gestionnaryLengthDisplayButtonNavigation() {
    const width_display_back = this.elementRef.nativeElement.querySelector('#inscription-leave-button').offsetWidth;
    const width_display_logIn = this.elementRef.nativeElement.querySelector('#inscription-logIN-button').offsetWidth;
    const width_display_Inscription = this.elementRef.nativeElement.querySelector('#inscription-inscription-button').offsetWidth;
    const width_max_display = Math.max(width_display_back, width_display_logIn, width_display_Inscription);
    this.elementRef.nativeElement.querySelector('#inscription-leave-button').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#inscription-logIN-button').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#inscription-inscription-button').style.width = width_max_display + 'px';
  }

  gestionnaryImgPassword() {
    const elementInputPassword = this.elementRef.nativeElement.querySelector('#inscription-password');
    const elementInputRPassword = this.elementRef.nativeElement.querySelector('#inscription-Rpassword');
    const elementPasswordBounding = elementInputPassword.getBoundingClientRect();
    const elementRPasswordBounding = elementInputRPassword.getBoundingClientRect();
    const heightInputPassword = elementInputPassword.offsetHeight;
    const topInputPassword = elementPasswordBounding.top;
    const topInputRPassword = elementRPasswordBounding.top;
    const widthInputPassword = elementInputPassword.offsetWidth;
    const leftInputPassword = elementInputPassword.offsetLeft;
    const element = this.elementRef.nativeElement.querySelector('#inscription-image-password-eye');
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

  //TODO
  clickOnInscription() {
    const elementWarningMSGName = this.elementRef.nativeElement.querySelector('#inscription-warning-msg-name');
    const elementWarningMSGPassword = this.elementRef.nativeElement.querySelector('#inscription-warning-msg-password');
    if (this.userService.getAllUserDict().hasOwnProperty(this.inscriptionForm.value.name)) {
      elementWarningMSGName.style.visibility = 'hidden';
      if (this.userService.getAllUserDict()[this.inscriptionForm.value.name].motDePasse == this.inscriptionForm.value.password) {
        elementWarningMSGPassword.style.visibility = 'hidden';
        this.userService.changeUser(this.inscriptionForm.value.name);
        this.router.navigateByUrl('/homePage');
      } else {
        elementWarningMSGPassword.style.visibility = 'visible';
      }
    } else {
      elementWarningMSGName.style.visibility = 'visible';
    }
  }


  clickOnLeave() {
    if (this.previousUrl) {
      this.router.navigateByUrl(this.previousUrl);
    } else {
      this.location.back();
    }
  }

  filterEvent(event : any) : event is NavigationEnd {
    return event instanceof NavigationEnd
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
