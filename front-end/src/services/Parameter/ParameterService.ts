import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PARAMETER } from 'src/mocks/Parameter/parameter.mock';
import { Parameter } from 'src/models/Parameter/parameter.model';

@Injectable({
    providedIn: 'root'
  })
  export class ParameterService {
  
    public currentSize$: BehaviorSubject<Parameter['size']> = new BehaviorSubject(PARAMETER.size)
    public currentMusic$: BehaviorSubject<Parameter['music']> = new BehaviorSubject(PARAMETER.music)
    public currentMusicPicturePath$ : BehaviorSubject<string> = new BehaviorSubject("Son_Disabled.png")
  
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
      this.setMusicUrl()
    }

    setCurrentSize(size: Parameter['size']) {
        this.currentSize$.next(size);
        console.log("tretre");
        
    }

    getMusicUrl() : Observable<string> {
        return this.currentMusicPicturePath$.asObservable();
    }

    setMusicUrl() {
        if(this.currentMusic$.value == false){
            this.currentMusicPicturePath$.next("Son_Disabled.png");
        } else {
            this.currentMusicPicturePath$.next("Son_Enable.png");
        }
    }
  
  }