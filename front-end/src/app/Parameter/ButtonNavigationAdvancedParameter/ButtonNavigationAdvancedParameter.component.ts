import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ButtonNavigationAdvancedParameter',
    templateUrl: './ButtonNavigationAdvancedParameter.component.html',
    styleUrls: ['./ButtonNavigationAdvancedParameter.component.scss']
})

export class ButtonNavigationAdvancedParameter implements OnInit {

    constructor(private router: Router) { }


    ngOnInit(): void {
    }

    navigateToAdvancedParameter() {
        this.router.navigate(['AdvancedParameterMainPage'], { 
            skipLocationChange: false,
            replaceUrl: false,
            queryParams: {},
            queryParamsHandling: 'merge',
            state: {}
        }).then(success => console.log('Navigation succeeded:', success))
        .catch(error => console.log('Navigation failed:', error));;
    }
} 