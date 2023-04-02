import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
import { ParameterService } from 'src/services/Parameter/ParameterService';

@Component({
    selector: 'app-ParameterSizeText',
    templateUrl: './ParameterSizeText.component.html',
    styleUrls: ['./ParameterSizeText.component.scss']
})

export class ParameterSizeTextComponent implements OnInit {
   
    disabled = false;
    max = 52;
    min = 14;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value : Parameter['size'] = this.parameterService.getCurrentSize();

    constructor(private parameterService : ParameterService) {
        this.parameterService.currentSize$.subscribe((size: Parameter['size']) => {
            this.value = size;
        });
    }

    
    ngOnInit(): void {
    }

    updateValue(){
        this.parameterService.updateTextSize(this.value);
    }
}
