import { Directive, ElementRef } from "@angular/core";
import { ParameterService } from "src/services/Parameter/ParameterService";

@Directive({
    selector: '[appAdaptFontSize]',
})

export class AdaptFontSizeDirective {
    constructor(
        private el: ElementRef,
        private parameterService : ParameterService
    ) {
        this.parameterService.currentSize$.subscribe(
            (size : number) => {
                this.el.nativeElement.style.fontSize = size + 'px';
                console.log("eazeze");
                
            }
        );
    }
} 