import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-back-button',
  templateUrl: './returnButton.component.html',
  styleUrls: ['./returnButton.component.scss']
})
export class ReturnButtonComponent {
  previousUrl: string = "";

  constructor(
    private location: Location,
    private router: Router) {
    this.router.events.pipe(filter(this.filterEvent)).subscribe((event: NavigationEnd) => {
        this.previousUrl = (event as NavigationEnd).url;
      });
  }

  goBack(): void {
    if (this.previousUrl) {
      this.router.navigateByUrl(this.previousUrl);
    } else {
      this.location.back();
    }
  }

  filterEvent(event : any) : event is NavigationEnd {
    return event instanceof NavigationEnd
  }
}