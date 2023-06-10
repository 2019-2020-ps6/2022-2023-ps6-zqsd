import { Component } from '@angular/core';
import { ParameterService } from 'src/services/Parameter/ParameterService';
import { AdvancedParameterService } from 'src/services/Parameter/AdvancedParameterService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public svgActif: boolean = true;

  constructor(private parameterService: ParameterService, private advParameterService : AdvancedParameterService) {}


  ngOnInit() {
    this.advParameterService.getSvgEnabled().subscribe((svgActif: boolean) => {
      this.svgActif = svgActif;
      console.log("SVG : " + this.svgActif)
    })
  }
}
