import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { TEXTSIZE } from 'src/mocks/Configuration/quizConfiguration.mock';
import { TextSize } from 'src/models/Configuration/quizConfiguration';
import { ParameterService } from './ParameterService';
import { AdvancedParameterService } from './AdvancedParameterService';
import { AdvancedParameterChronometer } from 'src/models/Parameter/advancedParameter.model';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

    private textSize : number = 20;
    private chronometerTime : number = 60; //in seconds

    public textSize$ : BehaviorSubject<number>  = new BehaviorSubject(this.chronometerTime);
    public chronometerTime$ : BehaviorSubject<number>  = new BehaviorSubject(this.textSize);

    constructor(private parameterService: ParameterService, 
                private advancedParameterService : AdvancedParameterService) {
        this.parameterService.currentSize$.subscribe((size: Parameter['size']) => {
            this.updateTextSize(Number(size))
        });
        this.advancedParameterService.currentChronometer$.subscribe((chronometer: AdvancedParameterChronometer['chronometer']) => {
            this.updateChronometerTime(Number(chronometer))
        });
    }

    updateTextSize(size : number){
        this.textSize = size;
        this.textSize$.next(this.textSize)
    }

    updateChronometerTime(time : number){
        this.chronometerTime = time;
        this.chronometerTime$.next(this.chronometerTime)
    }


 
}