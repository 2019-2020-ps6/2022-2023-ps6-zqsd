import { Component, OnInit } from '@angular/core';
import { AdvancedParameterFocusWork, AdvancedParameterMemoryWork } from 'src/models/Parameter/advancedParameter.model';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';


@Component({
    selector: 'app-MemoryWorkAdvancedParameter',
    templateUrl: './MemoryWorkAdvancedParameter.component.html',
    styleUrls: ['./MemoryWorkAdvancedParameter.component.scss']
})

export class MemoryWorkAdvancedParameterComponent implements OnInit {
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
        this.advancedParameterService.getCurrentComplexQuestionOBS().subscribe((complexQuestionIsEnable: AdvancedParameterMemoryWork['complexQuestion']) => {
            this.complexQuestionIsEnable = complexQuestionIsEnable;
            this.textDisplayComplexeQuestionButton = this.setTextDisplayButton(this.complexQuestionIsEnable);
        });
        this.advancedParameterService.getCurrentPuzzleOBS().subscribe((puzzleIsEnable: AdvancedParameterMemoryWork['puzzle']) => {
            this.puzzleIsEnable = puzzleIsEnable;
            this.textDisplayPuzzleButton = this.setTextDisplayButton(this.puzzleIsEnable);
        });
        this.advancedParameterService.getCurrentReflectionOBS().subscribe((reflexionIsEnable: AdvancedParameterMemoryWork['reflection']) => {
            this.reflexionIsEnable = reflexionIsEnable;
            this.textDisplayReflexionButton = this.setTextDisplayButton(this.reflexionIsEnable);
        });
        this.advancedParameterService.getCurrentMemoryOBS().subscribe((memoryIsEnable: AdvancedParameterMemoryWork['memory']) => {
            this.memoryIsEnable = memoryIsEnable;
            this.textDisplayMemoryButton = this.setTextDisplayButton(this.memoryIsEnable);
        });
        this.advancedParameterService.getCurrentLogicOBS().subscribe((logicIsEnable: AdvancedParameterMemoryWork['logic']) => {
            this.logicIsEnable = logicIsEnable;
            this.textDisplayLogicButton = this.setTextDisplayButton(this.logicIsEnable);
        });
    }

    ngOnInit(): void {
    }

    switchCurrentComplexQuestion(){
        this.advancedParameterService.switchCurrentComplexQuestion();
    }

    public switchCurrentPuzzle(){
      console.log("aaaaaaa");
      this.advancedParameterService.switchCurrentPuzzle();
    }

    switchCurrentReflection(){
        this.advancedParameterService.switchCurrentReflection();
    }

    switchCurrentMemory(){
        this.advancedParameterService.switchCurrentMemory();
    }

    switchCurrentLogic(){
        this.advancedParameterService.switchCurrentLogic();
    }

    setTextDisplayButton(isEnable : boolean) {
        if (isEnable){
            return "Activé"; //We print the state of the button
        }
        return "Desactivé"; //We print the state of the button
    }
}
