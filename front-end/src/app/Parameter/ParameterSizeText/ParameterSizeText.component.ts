import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { ConfigurationService } from 'src/services/Parameter/ConfigurationPlayingExperienceService';
import { ParameterService } from 'src/services/Parameter/ParameterService';

@Component({
    selector: 'app-ParameterSizeText',
    templateUrl: './ParameterSizeText.component.html',
    styleUrls: ['./ParameterSizeText.component.scss']
})

export class ParameterSizeTextComponent implements OnInit {
   
    disabled = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;

    currentSize: Parameter['size'] = ''; 
    constructor(
        private parameterService: ParameterService, 
        private configurationService : ConfigurationService) {
        this.parameterService.currentSize$.subscribe((size: Parameter['size']) => {
            this.currentSize = size;
        });
    }

    
    ngOnInit(): void {
    }

    updateValue(){
        this.configurationService.updateTextSize(this.value);
    }


    onThumbValueChange(event: number) {
        console.log(event);
        // Do something with the new value of the thumb
    }

}
