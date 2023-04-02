import { Component, OnInit } from '@angular/core';
import { AdvancedParameterChronometer } from 'src/models/Parameter/advancedParameter.model';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';


@Component({
    selector: 'app-ChonometerAdvancedParameter',
    templateUrl: './Chronometer.component.html',
    styleUrls: ['./Chronometer.component.scss']
})

export class ChronometerAdvancedParameterComponent implements OnInit {

    disabled = false;
    max = 300;
    min = 30;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value : AdvancedParameterChronometer['chronometer'] = this.advancedParameterService.getCurrentChronometer(); 

    constructor(
        private advancedParameterService: AdvancedParameterService) {
        this.advancedParameterService.currentChronometer$.subscribe((chronometerTime: AdvancedParameterChronometer['chronometer']) => {
            this.value = chronometerTime;
        });
    }

    
    ngOnInit(): void {
    }

    updateValue(){
        this.advancedParameterService.updateChronometerTime(this.value);
    }
}