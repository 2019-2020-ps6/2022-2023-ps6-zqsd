import { Component, OnInit } from '@angular/core';
import { ParameterService } from 'src/services/Parameter/ParameterService';

@Component({
    selector: 'app-ParameterMusic',
    templateUrl: './ParameterMusic.component.html',
    styleUrls: ['./ParameterMusic.component.scss']
})

export class ParameterMusicComponent implements OnInit {

    resultPictureUrl: string = "";
    selectedMusic: string = "";


    constructor(private parameterService: ParameterService) { }

    ngOnInit(): void {
        this.parameterService.getMusicUrlOBS().subscribe((url: string) => {
            this.resultPictureUrl = url;
        });
    }

    public toggleMusic() {
        this.parameterService.toggleMusic();
    }

    public setMusic(){
      this.parameterService.setSelectedMusic(this.selectedMusic);
      console.log("musique : " + this.selectedMusic)
    }
}
