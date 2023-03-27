import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { ParameterService } from 'src/services/ParameterService';

@Component({
    selector: 'app-ParameterSizeText',
    templateUrl: './ParameterSizeText.component.html',
    styleUrls: ['./ParameterSizeText.component.scss']
})

export class ParameterSizeTextComponent implements OnInit {
    
    currentSize: Parameter['size'] = ''; 
    constructor(private parameterService: ParameterService) {
        this.parameterService.currentSize$.subscribe((size: Parameter['size']) => {
            this.currentSize = size;
        });
    }

    
    ngOnInit(): void {
    }
    
} 