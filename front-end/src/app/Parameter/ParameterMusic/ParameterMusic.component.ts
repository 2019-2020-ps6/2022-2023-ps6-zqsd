import { Component, OnInit } from '@angular/core';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { ParameterService } from 'src/services/Parameter/ParameterService';

@Component({
    selector: 'app-ParameterMusic',
    templateUrl: './ParameterMusic.component.html',
    styleUrls: ['./ParameterMusic.component.scss']
})

export class ParameterMusicComponent implements OnInit {

    currentMusic: Parameter['music'] = false; 
    resultPictureUrl = "Son_Disabled.png"
    constructor(private parameterService: ParameterService) {
        this.parameterService.currentMusic$.subscribe((musicEnable: Parameter['music']) => {
            this.currentMusic = musicEnable;
        });
        this.parameterService.currentMusicPicturePath$.subscribe((url: string) => {
            this.resultPictureUrl = url;
        });
    }



    ngOnInit(): void {
    }


    public setMusic(){
        
        if (this.currentMusic==false){
            this.parameterService.setCurrentMusic(true);
        } else {
            this.parameterService.setCurrentMusic(false);
        }
    }

    
} 