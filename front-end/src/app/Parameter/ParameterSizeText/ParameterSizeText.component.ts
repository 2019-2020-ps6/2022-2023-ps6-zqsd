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
    min = 20;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value : Parameter['size'] = this.parameterService.getCurrentSize();
    public svgActif : boolean = true;

    constructor(private parameterService : ParameterService, private advancedParameterService : AdvancedParameterService) {
        }



    ngOnInit() {
      this.parameterService.currentSize$.subscribe((size: number) => {
        this.currentSize = size;
        console.log('Current size:', this.currentSize);
        document.documentElement.style.setProperty('--ts-currentSize', this.currentSize + 'px');
      });
      this.advancedParameterService.getSvgEnabled().subscribe((enabled: boolean) => {
        this.svgActif = enabled;
      });
    }

    updateValue(){
        this.parameterService.updateTextSize(this.value);
    }
}
