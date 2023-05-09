import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private hearderHeight: number = 175;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public hearderHeight$: BehaviorSubject<number> = new BehaviorSubject(this.hearderHeight);

  public TopRightMargin_Timer : number[] = [0,0,25];
  public TopRightMargin_Timer$ : BehaviorSubject<number[]> = new BehaviorSubject(this.TopRightMargin_Timer);



  constructor() {
  }

  getHearderHeight(): Observable<number> {
    return this.hearderHeight$.asObservable();
  }

  setHearderHeight(height: number) {
    this.hearderHeight = height;
    this.hearderHeight$.next(this.hearderHeight);
  }

  getTopRightMargin_Timer(): Observable<number[]> {
    return this.TopRightMargin_Timer$.asObservable();
  }

  setTopRightMargin_Timer(top: number, right: number, margin: number) {
    this.TopRightMargin_Timer = [top, right, margin];
    this.TopRightMargin_Timer$.next(this.TopRightMargin_Timer);
  }
}
