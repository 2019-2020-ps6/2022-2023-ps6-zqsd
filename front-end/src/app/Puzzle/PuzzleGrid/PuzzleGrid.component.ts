import {Component, ElementRef, Input} from '@angular/core';
import './_variables_puzzle.scss';

@Component({
  selector: 'app-puzzle-grid',
  templateUrl: './PuzzleGrid.component.html',
  styleUrls: ['./PuzzleGrid.component.scss']
})
export class PuzzleGridComponent {
  @Input() size: number = 4;

  constructor() { }
  ngOnInit() {
  }

  getRangeSQRT(num: number): number[] {
    return Array(Math.sqrt(num)).fill(0).map((_, i) => i + 1);
    /**
     * Create an Array of size num
     * fill(x) : put x in all the array
     * map() : allow to create a function for each element in the array when the array is created
     * _ : the element in the array that we are manipulating right now
     * i : the index of the element in the array that we are manipulating right now
     */
  }
}

/*
endDrag(): void {
  this.isDragging = false;
  const imageElement = this.imageElement.nativeElement;

  // Calcule le carré le plus proche de la grille
  const gridElement = imageElement.parentElement;
  const gridRect = gridElement.getBoundingClientRect();
  const gridX = this.imageLeft - gridRect.left;
  const gridY = this.imageTop - gridRect.top;
  const squareWidth = gridElement.offsetWidth / 3;
  const squareHeight = gridElement.offsetHeight / 3;
  const squareX = Math.floor(gridX / squareWidth);
  const squareY = Math.floor(gridY / squareHeight);

  // Repositionne l'image dans le carré le plus proche de la grille
  const newImageX = squareX * squareWidth;
  const newImageY = squareY * squareHeight;
  imageElement.style.left = newImageX + 'px';
  imageElement.style.top = newImageY + 'px';

  // Communique à un autre composant si l'image est placée correctement
  if (newImageX === this.puzzleX && newImageY === this.puzzleY) {
  this.correctPlacement.emit(true);
} else {
  this.correctPlacement.emit(false);
}
}
*/
/*
/ Ajoute un événement "mouseup" à l'image
image.addEventListener('mouseup', (event) => {
  // Récupère la position de la souris au moment du relâchement
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calcule le carré le plus proche de la grille
  const gridRect = grid.getBoundingClientRect();
  const gridX = mouseX - gridRect.left;
  const gridY = mouseY - gridRect.top;
  const squareWidth = grid.offsetWidth / 3;
  const squareHeight = grid.offsetHeight / 3;
  const squareX = Math.floor(gridX / squareWidth);
  const squareY = Math.floor(gridY / squareHeight);

  // Repositionne l'image dans le carré le plus proche de la grille
  const newImageX = squareX * squareWidth;
  const newImageY = squareY * squareHeight;
  image.style.left = newImageX + 'px';
  image.style.top = newImageY + 'px';

  // Communique à un autre composant si l'image est placée correctement
  if (newImageX === puzzleX && newImageY === puzzleY) {
    this.correctPlacement.emit(true);
  } else {
    this.correctPlacement.emit(false);
  }
});



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  private isImagePlacedCorrectly: boolean = false;

  constructor() { }

  setIsImagePlacedCorrectly(value: boolean) {
    this.isImagePlacedCorrectly = value;
  }

  getIsImagePlacedCorrectly() {
    return this.isImagePlacedCorrectly;
  }
}
 */
