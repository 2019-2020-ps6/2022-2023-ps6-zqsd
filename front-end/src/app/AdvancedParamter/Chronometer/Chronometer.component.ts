import { Component, OnInit } from '@angular/core';
import { AdvancedParameterChronometer } from 'src/models/Parameter/advancedParameter.model';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
import { ConfigurationService } from 'src/services/Parameter/ConfigurationPlayingExperienceService';


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
    value = 0;

    currentChronometerTime: AdvancedParameterChronometer['chronometer'] = ""; 
    constructor(
        private advancedParameterService: AdvancedParameterService, 
        private configurationService : ConfigurationService) {
        this.advancedParameterService.currentChronometer$.subscribe((chronometerTime: AdvancedParameterChronometer['chronometer']) => {
            this.currentChronometerTime = chronometerTime;
        });
    }

    
    ngOnInit(): void {
    }

    updateValue(){
        this.configurationService.updateChronometerTime(this.value);
    }
}