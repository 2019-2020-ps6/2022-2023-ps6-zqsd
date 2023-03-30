import { Directive, ElementRef } from "@angular/core";
import { ConfigurationService } from "src/services/Parameter/ConfigurationPlayingExperienceService";

@Directive({
    selector: '[appAdaptFontSize]',
})

export class AdaptFontSizeDirective {
    constructor(
        private el: ElementRef,
        private configurationService : ConfigurationService
    ) {
        this.configurationService.textSize$.subscribe(
            (size : number) => {
                this.el.nativeElement.style.fontSize = size + 'px';
                console.log("eazeze");
                
            }
        );
    }
} 