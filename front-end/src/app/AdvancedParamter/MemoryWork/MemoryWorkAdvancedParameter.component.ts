import { Component, OnInit } from '@angular/core';
import { AdvancedParameterFocusWork, AdvancedParameterMemoryWork } from 'src/models/Parameter/advancedParameter.model';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';


@Component({
    selector: 'app-MemoryWorkAdvancedParameter',
    templateUrl: './MemoryWorkAdvancedParameter.component.html',
    styleUrls: ['./MemoryWorkAdvancedParameter.component.scss']
})

export class MemoryWorkAdvancedParameterComponent implements OnInit {

  isComplexQuestionActive: boolean = false;
  isPuzzleActive: boolean = false;
  isReflectionActive: boolean = false;
  isMemoryActive: boolean = false;
  isLogicActive: boolean = false;

    complexQuestionIsEnable : AdvancedParameterMemoryWork['complexQuestion'] = this.advancedParameterService.getCurrentComplexQuestion();
    puzzleIsEnable : AdvancedParameterMemoryWork['puzzle'] = this.advancedParameterService.getCurrentPuzzle();
    reflexionIsEnable : AdvancedParameterMemoryWork['reflection'] = this.advancedParameterService.getCurrentReflection();
    memoryIsEnable : AdvancedParameterMemoryWork['memory'] = this.advancedParameterService.getCurrentMemory();
    logicIsEnable : AdvancedParameterMemoryWork['logic'] = this.advancedParameterService.getCurrentLogic();

    textDisplayComplexeQuestionButton : string = this.setTextDisplayButton(this.complexQuestionIsEnable);
    textDisplayPuzzleButton : string = this.setTextDisplayButton(this.puzzleIsEnable);
    textDisplayReflexionButton : string = this.setTextDisplayButton(this.reflexionIsEnable);
    textDisplayMemoryButton : string = this.setTextDisplayButton(this.memoryIsEnable);
    textDisplayLogicButton : string = this.setTextDisplayButton(this.logicIsEnable);


    constructor(
        private advancedParameterService: AdvancedParameterService) {
        this.advancedParameterService.currentBackGround$.subscribe((complexQuestionIsEnable: AdvancedParameterMemoryWork['complexQuestion']) => {
            this.complexQuestionIsEnable = complexQuestionIsEnable;
            this.textDisplayComplexeQuestionButton = this.setTextDisplayButton(this.complexQuestionIsEnable)
        });
        this.advancedParameterService.currentQuestionAnimation$.subscribe((puzzleIsEnable: AdvancedParameterMemoryWork['puzzle']) => {
            this.puzzleIsEnable = puzzleIsEnable;
            this.textDisplayPuzzleButton = this.setTextDisplayButton(this.puzzleIsEnable)
        });
        this.advancedParameterService.currentRightAnswerAnimation$.subscribe((reflexionIsEnable: AdvancedParameterMemoryWork['reflection']) => {
            this.reflexionIsEnable = reflexionIsEnable;
            this.textDisplayReflexionButton = this.setTextDisplayButton(this.reflexionIsEnable)
        });
        this.advancedParameterService.currentWrongAnswerAnimation$.subscribe((memoryIsEnable: AdvancedParameterMemoryWork['memory']) => {
            this.memoryIsEnable = memoryIsEnable;
            this.textDisplayMemoryButton = this.setTextDisplayButton(this.memoryIsEnable)
        });
        this.advancedParameterService.currentWrongAnswerAnimation$.subscribe((logicIsEnable: AdvancedParameterMemoryWork['logic']) => {
            this.logicIsEnable = logicIsEnable;
            this.textDisplayLogicButton = this.setTextDisplayButton(this.logicIsEnable)
        });
    }

    ngOnInit(): void {
    }


    setTextDisplayButton(isEnable : boolean) {
        if (isEnable){
            return "Activé" //We print the state of the button
        }
        return "Desactivé" //We print the state of the button
    }

  switchCurrentComplexQuestion() {
    this.isComplexQuestionActive = !this.isComplexQuestionActive;
  }

  switchCurrentPuzzle() {
    this.isPuzzleActive = !this.isPuzzleActive;
  }

  switchCurrentReflection() {
    this.isReflectionActive = !this.isReflectionActive;
  }

  switchCurrentMemory() {
    this.isMemoryActive = !this.isMemoryActive;
  }

  switchCurrentLogic() {
    this.isLogicActive = !this.isLogicActive;
  }

}
