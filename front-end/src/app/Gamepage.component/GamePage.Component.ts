import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-GamePage',
    templateUrl: './GamePage.Component.html',
    styleUrls: ['./GamePage.Component.scss']
})

export class GamepageComponent implements OnInit {
    public number: Number=15;
    ngOnInit(): void {}
} 