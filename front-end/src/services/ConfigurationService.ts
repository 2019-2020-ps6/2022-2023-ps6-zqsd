import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { TEXTSIZE } from '../mocks/Configuration/quizConfiguration.mock';
import { TextSize } from '../models/Configuration/quizConfiguration';
import { ParameterService } from './ParameterService';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

    private defaultTextSize : number = 14;
    private maxValue : number = 52;
    private textSize : number = this.defaultTextSize;
    public textSize$ : BehaviorSubject<number>  = new BehaviorSubject(this.textSize);

    constructor(private parameterService: ParameterService) {
        this.parameterService.currentSize$.subscribe((size: Parameter['size']) => {
            this.updateTextSize(Number(size))
        });
    }

    updateTextSize(size : number){
        size = this.convertPercentToNumberValue(size)
        this.textSize = size + this.defaultTextSize;
        this.textSize$.next(this.textSize)
    }

    convertPercentToNumberValue(numberToConvert : number) : number{
        let temporary : number = (numberToConvert*this.maxValue)/100;
        temporary = Math.round(temporary)
        return temporary;
    }
 
}