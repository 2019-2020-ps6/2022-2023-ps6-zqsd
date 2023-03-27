import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { ParameterService } from 'src/services/ParameterService';

@Component({
    selector: 'app-ParameterMusic',
    templateUrl: './ParameterMusic.component.html',
    styleUrls: ['./ParameterMusic.component.scss']
})

export class ParameterMusicComponent implements OnInit {

    currentMusic: Parameter['music'] = false; 
    constructor(private parameterService: ParameterService) {
        this.parameterService.currentMusic$.subscribe((musicEnable: Parameter['music']) => {
            this.currentMusic = musicEnable;
        });
    }



    ngOnInit(): void {
    }


    private setMusic(doesMusicIsEnable : Parameter['music']){
        this.parameterService.setCurrentMusic(doesMusicIsEnable)
    }
    
} 