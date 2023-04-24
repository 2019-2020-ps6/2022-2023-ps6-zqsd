import { Component, OnInit } from '@angular/core';
import { ParameterService } from 'src/services/Parameter/ParameterService';

@Component({
    selector: 'app-ParameterMusic',
    templateUrl: './ParameterMusic.component.html',
    styleUrls: ['./ParameterMusic.component.scss']
})

export class ParameterMusicComponent implements OnInit {

    resultPictureUrl: string = "";

    constructor(private parameterService: ParameterService) { }

    ngOnInit(): void {
        this.parameterService.getMusicUrlOBS().subscribe((url: string) => {
            this.resultPictureUrl = url;
        });
    }

    public toggleMusic() {
        this.parameterService.toggleMusic();
    }
}
