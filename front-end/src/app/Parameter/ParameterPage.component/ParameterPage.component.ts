import { Component, OnInit } from '@angular/core';
import {ParameterService} from "../../../services/Parameter/ParameterService";
import {PARAMETER} from "../../../mocks/Parameter/parameter.mock";

@Component({
    selector: 'app-ParameterPage',
    templateUrl: './ParameterPage.component.html',
    styleUrls: ['./ParameterPage.component.scss']
})

export class ParameterPageComponent implements OnInit {


  constructor(private parameterService: ParameterService) {
  }


  ngOnInit(): void {
    console.log(this.parameterService.getCurrentSize())
    this.parameterService.fetchParameter();
  }
}
