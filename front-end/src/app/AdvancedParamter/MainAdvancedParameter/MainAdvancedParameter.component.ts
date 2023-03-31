import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-MainAdvancedParameter',
    templateUrl: './MainAdvancedParameter.component.html',
    styleUrls: ['./MainAdvancedParameter.component.scss']
})

export class MainAdvancedParamterComponent implements OnInit {

    ChronometerisEnable = false;
    MemoryWorkisEnable = false;
    FocusWorkisEnable = false;

    constructor() { }

    ngOnInit(): void {
    }

    public ActivateChronometer(){
        this.ChronometerisEnable = !this.ChronometerisEnable;
    }

    public ActivateMemoryWork(){
        this.MemoryWorkisEnable = !this.MemoryWorkisEnable;
    }

    public ActivateFocusWork(){
        this.FocusWorkisEnable = !this.FocusWorkisEnable;
    }

}