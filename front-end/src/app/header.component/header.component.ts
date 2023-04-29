import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { GameService } from "src/services/GameService";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(private location: Location, private gameService: GameService) { }

    ngOnInit(): void {
    }
    goBack() {
      this.location.back();
    }
     stopCountdown():void{
      this.gameService.stopCountdown();
     }

}
