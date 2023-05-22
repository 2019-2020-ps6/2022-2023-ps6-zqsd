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
  templateUrl: './Connexion.component.html',
  styleUrls: ['./Connexion.component.scss']
})

export class ConnexionComponent implements OnInit {

  public connexionForm: FormGroup;
  private sizeText: number = PARAMETER.size;
  private topForm : number = 50;
  previousUrl: string = "";
  public pathImgPassword : string = "../../../assets/connexion/Eye.png";

  constructor (private location: Location,
               private router: Router,
               public formBuilder: FormBuilder, public userService: UserService,
               private elementRef: ElementRef, public parameterService : ParameterService) {
      this.router.events.pipe(filter(this.filterEvent)).subscribe((event: NavigationEnd) => {
        this.previousUrl = (event as NavigationEnd).url;
      });

    this.connexionForm = this.formBuilder.group({
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
    this.elementRef.nativeElement.querySelector('.form-connexion').style.top = this.topForm + 'px';
    const elements = this.elementRef.nativeElement.querySelectorAll('.text_displayed');
    elements.forEach((element: HTMLElement) => {
      element.style.fontSize = this.sizeText + 'px';
    });
    this.gestionnaryLengthDisplayTextForInput();
    this.gestionnaryLengthDisplayButtonNavigation();
    this.gestionnaryTopOFNavigation();
  }


  gestionnaryLengthDisplayTextForInput() {
    const width_display_name = this.elementRef.nativeElement.querySelector('#connexion-name_display').offsetWidth;
    const width_display_password = this.elementRef.nativeElement.querySelector('#connexion-password_display').offsetWidth;
    const width_max_display = Math.max(width_display_name, width_display_password);
    this.elementRef.nativeElement.querySelector('#connexion-name_display').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#connexion-password_display').style.width = width_max_display + 'px';
  }

  gestionnaryLengthDisplayButtonNavigation() {
    const width_display_back = this.elementRef.nativeElement.querySelector('#connexion-leave-button').offsetWidth;
    const width_display_logIn = this.elementRef.nativeElement.querySelector('#connexion-logIN-button').offsetWidth;
    const width_display_Inscription = this.elementRef.nativeElement.querySelector('#connexion-inscription-button').offsetWidth;
    const width_max_display = Math.max(width_display_back, width_display_logIn, width_display_Inscription);
    this.elementRef.nativeElement.querySelector('#connexion-leave-button').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#connexion-logIN-button').style.width = width_max_display + 'px';
    this.elementRef.nativeElement.querySelector('#connexion-inscription-button').style.width = width_max_display + 'px';
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
    const heightInputPassword = this.elementRef.nativeElement.querySelector('#connexion-password').offsetHeight;
    const element = this.elementRef.nativeElement.querySelector('#connexion-image-password-eye');
    const widthInputPassword = this.elementRef.nativeElement.querySelector('#connexion-password').offsetWidth;
    const leftInputPassword = this.elementRef.nativeElement.querySelector('#connexion-password').offsetLeft;

    if (element) {
      element.style.height = heightInputPassword + 'px';
      element.style.left = (widthInputPassword+leftInputPassword) + 'px';
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
    const elementWarningMSGName = this.elementRef.nativeElement.querySelector('#connection-warning-msg-name');
    const elementWarningMSGPassword = this.elementRef.nativeElement.querySelector('#connection-warning-msg-password');
    if (this.userService.getAllUserDict().hasOwnProperty(this.connexionForm.value.name)) {
      elementWarningMSGName.style.visibility = 'hidden';
      if (this.userService.getAllUserDict()[this.connexionForm.value.name].motDePasse == this.connexionForm.value.password) {
        elementWarningMSGPassword.style.visibility = 'hidden';
        this.userService.changeUser(this.connexionForm.value.name);
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
    } else {
      this.pathImgPassword = "../../../assets/connexion/Eye.png";
    }
  }

}
