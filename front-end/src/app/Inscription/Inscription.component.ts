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
  public pathImgPassword : string = "../../../assets/connexion/hiddenEye.png";
  public typePassword : string = "password";
  public warningMsgId : string = "-";
  public buttonProfilePathPicture : string = "../../../assets/inscription/up.png";
  private isUp : boolean = true;

  constructor (private location: Location,
               private router: Router,
               public formBuilder: FormBuilder, public userService: UserService,
               private elementRef: ElementRef, public parameterService : ParameterService) {
    this.inscriptionForm = this.formBuilder.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      id: ['', Validators.required],
      password: ['', Validators.required],
      Rpassword: ['', Validators.required],
    });
    this.parameterService.currentSize$.subscribe((size: number) => {
      this.sizeText = size;
      this.setSizeText();
    })
  }


  statusButton: StatusButton[] = [
    {
      onClick: () => this.changeStatus("ut"),
      status: "-----------",
    },
    {
      onClick: () => this.changeStatus("ut"),
      status: "Utilisateur",
    },
    {
      onClick: () => this.changeStatus("pr"),
      status: "Proche",
    },
    {
      onClick: () => this.changeStatus("pe"),
      status: "Personnel",
    }
  ];
  actualStatus: string = "null";
  dictStatus : { [key: string]: number } = {
    "ut": 0,
    "pr": 1,
    "pe": 2
  };


  showHideBUttonProfile() {
    const pathPicture : string = this.buttonProfilePathPicture;
    if (pathPicture == "../../../assets/inscription/up.png") {
      this.buttonProfilePathPicture = "../../../assets/inscription/down.png";
      const hiddenElements = this.elementRef.nativeElement.querySelectorAll('.hidden');
      hiddenElements.forEach((element: HTMLElement) => {
        element.style.display = 'flex';
      });
      this.isUp = false;
    } else {
      this.buttonProfilePathPicture = "../../../assets/inscription/up.png";
      const hiddenElements = this.elementRef.nativeElement.querySelectorAll('.hidden');
      hiddenElements.forEach((element: HTMLElement) => {
        element.style.display = 'none';
      });
      this.isUp = true;
    }
    console.log(this.isUp);
  }


  changeStatus(status: string) {
    if (this.isUp){
      return;
    }
    if (this.dictStatus.hasOwnProperty(status)) {
      const choosenStatusIndex : number = this.dictStatus[status];
      if (choosenStatusIndex != 0 || this.actualStatus == "null") {
        var previousStatus : string;
        if (this.actualStatus == "null") {
          this.statusButton.shift();
          previousStatus = "ut";
        } else {
          previousStatus = this.actualStatus;
        }
        this.dictStatus[status] = 0;
        this.dictStatus[previousStatus] = choosenStatusIndex;
        this.actualStatus = status;
        const previousStatusInterface = this.statusButton[0];
        const choosenStatusInterface = this.statusButton[choosenStatusIndex];
        this.statusButton[0] = choosenStatusInterface;
        this.statusButton[choosenStatusIndex] = previousStatusInterface;
      }
    }
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setSizeText();
    this.gestionnaryImgPassword();
    this.gestionnaryPictureProfile();
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

  gestionnaryPictureProfile() {
    const elementPictureProfile = this.elementRef.nativeElement.querySelector('#img-button-profile');
    const elementDisplayTextProfile = this.elementRef.nativeElement.querySelector('#inscription-profile_display');
    elementPictureProfile.style.height = (elementDisplayTextProfile.offsetHeight - 20) + 'px';
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
    var isGood : boolean = true;
    const elementWarningMSGName = this.elementRef.nativeElement.querySelector('#inscription-warning-msg-name');
    const elementWarningMSGPassword = this.elementRef.nativeElement.querySelector('#inscription-warning-msg-password');
    const elementWarningMSGRPassword = this.elementRef.nativeElement.querySelector('#inscription-warning-msg-Rpassword');
    const elementWarningMSGSurname = this.elementRef.nativeElement.querySelector('#inscription-warning-msg-surname');
    const elementWarningMSGId = this.elementRef.nativeElement.querySelector('#inscription-warning-msg-id');
    const elementWarningMSGStatus = this.elementRef.nativeElement.querySelector('#inscription-warning-msg-profile');
    if (this.inscriptionForm.value.surname.length < 3) {
      elementWarningMSGSurname.style.visibility = 'visible';
      isGood = false;
    } else {
      elementWarningMSGSurname.style.visibility = 'hidden';
    }
    if (this.inscriptionForm.value.name.length < 1) {
      elementWarningMSGName.style.visibility = 'visible';
      isGood = false;
    } else {
      elementWarningMSGName.style.visibility = 'hidden';
    }
    if (this.inscriptionForm.value.id.length < 1) {
      this.warningMsgId = "L'identifiant doit faire au moins 1 caractère";
      elementWarningMSGId.style.visibility = 'visible';
      isGood = false;
    } else if (this.userService.getAllUserDict().hasOwnProperty(this.inscriptionForm.value.id)) {
      this.warningMsgId = "L'identifiant existe déjà";
      elementWarningMSGId.style.visibility = 'visible';
      isGood = false;
    } else {
      elementWarningMSGId.style.visibility = 'hidden';
    }
    if (this.inscriptionForm.value.password.length < 6) {
      elementWarningMSGPassword.style.visibility = 'visible';
      isGood = false;
    } else {
      elementWarningMSGPassword.style.visibility = 'hidden';
    }
    if (this.inscriptionForm.value.password != this.inscriptionForm.value.Rpassword) {
      elementWarningMSGRPassword.style.visibility = 'visible';
      isGood = false;
    } else {
      elementWarningMSGRPassword.style.visibility = 'hidden';
    }
    if (this.actualStatus == "null") {
      elementWarningMSGStatus.style.visibility = 'visible';
      isGood = false;
    } else {
      elementWarningMSGStatus.style.visibility = 'hidden';
    }
    if (isGood) {
      const newUser = {
        id : Object.keys(this.userService.getAllUserDict()).length.toString(),
        prenom : this.inscriptionForm.value.surname.toLowerCase(),
        nom : this.inscriptionForm.value.name.toLowerCase(),
        identifiant : this.inscriptionForm.value.id,
        motDePasse : this.inscriptionForm.value.password,
        status : "user",
      }
      this.userService.addUser(newUser);
      this.router.navigateByUrl('/ConnexionPage');
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
