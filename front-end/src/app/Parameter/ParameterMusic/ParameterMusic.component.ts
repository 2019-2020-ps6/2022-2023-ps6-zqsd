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
    absolutePathToSRC : string = "../../../"
    currentMusicPicturePath : string = "./assets/Parameter/Son_Disabled.png"
    resultPictureUrl = "../../../../src/assets/Parameter/Son_Disabled.png"
    constructor(private parameterService: ParameterService) {
        this.parameterService.currentMusic$.subscribe((musicEnable: Parameter['music']) => {
            this.currentMusic = musicEnable;
        });
        this.parameterService.currentMusicPicturePath$.subscribe((url: string) => {
            this.currentMusicPicturePath = url;
            this.setUpUrlPicture();
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

    private setUpUrlPicture(){
        this.resultPictureUrl = this.absolutePathToSRC + this.currentMusicPicturePath;
    }
    
} 