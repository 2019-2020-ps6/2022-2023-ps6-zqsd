import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
import { ParameterService } from 'src/services/Parameter/ParameterService';
import { MatSliderModule } from '@angular/material/slider';

@Component({
    selector: 'app-ParameterSizeText',
    templateUrl: './ParameterSizeText.component.html',
    styleUrls: ['./ParameterSizeText.component.scss']
})

export class ParameterSizeTextComponent implements OnInit {
    public currentSize: number = 0;
    disabled = false;
    max = 30;
    min = 15;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value : Parameter['size'] = this.parameterService.getCurrentSize();

    constructor(private parameterService : ParameterService) {
        }



    ngOnInit() {
      this.parameterService.currentSize$.subscribe((size: number) => {
        this.currentSize = size;
        console.log('Current size:', this.currentSize);
        document.documentElement.style.setProperty('--ts-currentSize', this.currentSize + 'px');
      });
    }

    updateValue(){
        this.parameterService.updateTextSize(this.value);
    }
}
