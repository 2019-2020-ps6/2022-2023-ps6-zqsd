import { Component } from '@angular/core';
import { ParameterService } from 'src/services/Parameter/ParameterService';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public musicEnabled: boolean = true;
  public audio: HTMLAudioElement | null = null;
  public svgActif: boolean = true;

  constructor(private parameterService: ParameterService, private advParameterService : AdvancedParameterService) {}


  ngOnInit() {
    this.parameterService.currentMusic$.subscribe((musicEnabled: boolean) => {
      this.musicEnabled = musicEnabled;
      if (this.musicEnabled) {
        this.audio = new Audio();
        this.audio.src = './assets/sounds/kahoot.mp3';
        this.audio.load();
        this.audio.loop = true;
        this.audio.play();
      } else {
        if (this.audio) {
          this.audio.pause();
          this.audio = null;
        }
      }
    });
    this.advParameterService.getSvgEnabled().subscribe((svgActif: boolean) => {
      this.svgActif = svgActif;
      console.log("SVG : " + this.svgActif)
    })
  }

  toggleMusic() {
    this.musicEnabled = !this.musicEnabled;
    if (this.musicEnabled) {
      this.audio = new Audio();
      this.audio.src = './assets/sounds/kahoot.mp3';
      this.audio.load();
      this.audio.loop = true;
      this.audio.play();
    } else {
      if (this.audio) {
        this.audio.pause();
        this.audio = null;
      }
    }
  }
}
