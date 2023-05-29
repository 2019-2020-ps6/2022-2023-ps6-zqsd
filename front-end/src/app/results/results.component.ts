import { Component } from '@angular/core';
import { GameService } from '../../services/GameService';
import { Router } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {


  constructor(public gameService: GameService, private router: Router) {
  }
  getScorePhrase(score: number, totalQuestions: number): string {
    const ratio = score / totalQuestions;
  
    if (ratio === 1) {
      return "Félicitations, vous avez obtenu un score parfait !";
    } else if (ratio >= 0.8) {
      return "Bravo, vous avez un excellent score !";
    } else if (ratio >= 0.5) {
      return "Vous avez un bon score, continuez comme ça !";
    } else {
      return "Ne vous découragez pas, continuez à vous entraîner !";
    }
  }

  jouerQuiz(): void {
    this.gameService.triggerQuizEvent();
    setTimeout(() => {
      this.router.navigate(['/Gamepage']);
    }, 1000);
  }
  
}

