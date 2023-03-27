import { Parameter } from 'src/models/Parameter/parameter.model';
import { PARAMETER } from 'src/mocks/Parameter/parameter.mock';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class GameService {
  
    public currentSize$: BehaviorSubject<Parameter['size']> = new BehaviorSubject(PARAMETER.size)
    public currentMusic$: BehaviorSubject<Parameter['music']> = new BehaviorSubject(PARAMETER.music)

  
    constructor() {
    }
  
  
    getCurrentSize(): Observable<Parameter['size']> {
      return this.currentSize$.asObservable();
    }

    getCurrentMusic(): Observable<Parameter['music']> {
        return this.currentMusic$.asObservable();
    }
  
    setCurrentMusic(musicEnable: Parameter['music']) {
      this.currentMusic$.next(musicEnable);
    }

    setCurrentSize(size: Parameter['size']) {
        this.currentSize$.next(size);
    }
  
  }