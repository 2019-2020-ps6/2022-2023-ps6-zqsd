import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { AdvancedParameterFocusWork } from 'src/models/Parameter/advancedParameter.model';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';


@Component({
    selector: 'app-FocusWorkAdvancedParameter',
    templateUrl: './FocusWorkAdvancedParameter.component.html',
    styleUrls: ['./FocusWorkAdvancedParameter.component.scss']
})

export class FocusWorkAdvancedParameterComponent implements OnInit {

    backgroundIsEnable : AdvancedParameterFocusWork['background'] = this.advancedParameterService.getCurrentBackground();
    questionAnimationIsEnable : AdvancedParameterFocusWork['questionAnimation'] = this.advancedParameterService.getCurrentQuestionAnimation();
    rightAnswerAnimationIsEnable : AdvancedParameterFocusWork['rightAnswerAnimation'] = this.advancedParameterService.getCurrentRightAnswerAnimation();
    wrongAnswerAnimationIsEnable : AdvancedParameterFocusWork['wrongAnswerAnimation'] = this.advancedParameterService.getCurrentWrongAnswerAnimatino();
    
    textDisplayBackgroundButton : string = this.setTextDisplayButton(this.backgroundIsEnable);
    textDisplayQuestionAnimationButton : string = this.setTextDisplayButton(this.questionAnimationIsEnable);
    textDisplayRightAnswerAnimationButton : string = this.setTextDisplayButton(this.rightAnswerAnimationIsEnable);
    textDisplayWrongAnswerAnimationButton : string = this.setTextDisplayButton(this.wrongAnswerAnimationIsEnable);

    public svgActif = true;
    @ViewChild('toggleButton', { static: true }) toggleButton!: ElementRef<HTMLButtonElement>;



    constructor(private advancedParameterService: AdvancedParameterService) {
        this.advancedParameterService.currentBackGround$.subscribe((currentBackGround: AdvancedParameterFocusWork['background']) => {
            this.backgroundIsEnable = currentBackGround;
            this.textDisplayBackgroundButton = this.setTextDisplayButton(this.backgroundIsEnable)
        });
        this.advancedParameterService.currentQuestionAnimation$.subscribe((questionAnimationIsEnable: AdvancedParameterFocusWork['questionAnimation']) => {
            this.questionAnimationIsEnable = questionAnimationIsEnable;
            this.textDisplayQuestionAnimationButton = this.setTextDisplayButton(this.questionAnimationIsEnable)
        });
        this.advancedParameterService.currentRightAnswerAnimation$.subscribe((rightAnswerAnimationIsEnable: AdvancedParameterFocusWork['rightAnswerAnimation']) => {
            this.rightAnswerAnimationIsEnable = rightAnswerAnimationIsEnable;
            this.textDisplayRightAnswerAnimationButton = this.setTextDisplayButton(this.rightAnswerAnimationIsEnable)
        });
        this.advancedParameterService.currentWrongAnswerAnimation$.subscribe((wrongAnswerAnimationIsEnable: AdvancedParameterFocusWork['wrongAnswerAnimation']) => {
            this.wrongAnswerAnimationIsEnable = wrongAnswerAnimationIsEnable;
            this.textDisplayWrongAnswerAnimationButton = this.setTextDisplayButton(this.wrongAnswerAnimationIsEnable)
        });
        this.advancedParameterService.getSvgEnabled().subscribe((enabled: boolean) => {
            enabled = this.svgActif;
        });
    }

    ngOnInit(): void {
    }

    switchCurrentBackground(){
        this.advancedParameterService.switchCurrentBackground()
    }

    switchCurrentQuestionAnimation(){
        this.advancedParameterService.switchCurrentQuestionAnimation()
    }

    switchCurrentRightAnswerAnimation(){
        this.advancedParameterService.switchCurrentRightAnswerAnimation()
    }

    switchCurrentWrongAnswerAnimation(){
        this.advancedParameterService.switchCurrentWrongAnswerAnimatinon()
    }

    setTextDisplayButton(isEnable : boolean) {
        if (isEnable){
            return "Désactiver"; //We print the state of the button
        }
        return "Activer"; //We print the state of the button
    }

    toggleSVG() {
        this.svgActif = !this.svgActif;
        this.advancedParameterService.setSvgActif(this.svgActif);
        if (this.toggleButton) {
          this.toggleButton.nativeElement.innerText = this.svgActif ? 'Clair' : 'Sombre';
        }
        console.log("svg : " + this.svgActif);
    }
}