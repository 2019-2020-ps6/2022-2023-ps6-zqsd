import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PARAMETER } from 'src/mocks/Parameter/parameter.mock';
import { Parameter } from 'src/models/Parameter/parameter.model';

@Injectable({
    providedIn: 'root'
  })
  export class ParameterService {
  
    private currentSize : Parameter['size'] = PARAMETER.size;
    private currentMusic : Parameter['music'] = PARAMETER.music;
    private currentMusicPicturePath : Parameter['nameMusicPicture'] = "Son_Disabled.png"; //this.getMusicString(this.currentMusic);

    public currentSize$: BehaviorSubject<Parameter['size']> = new BehaviorSubject(this.currentSize)
    public currentMusic$: BehaviorSubject<Parameter['music']> = new BehaviorSubject(this.currentMusic)
    public currentMusicPicturePath$ : BehaviorSubject<Parameter['nameMusicPicture']> = new BehaviorSubject(this.currentMusicPicturePath)
  

    constructor () {
      
    }

/*
    constructor(private parameterService: ParameterService) {
      this.parameterService.currentSize$.subscribe((size: Parameter['size']) => {
        this.updateTextSize(Number(size))
      });
    }*/
  
  
    getCurrentSizeOBS(): Observable<Parameter['size']> {
      return this.currentSize$.asObservable();
    }

    getCurrentSize(): Parameter['size'] {
      return this.currentSize;
    }

    getCurrentMusic(): Parameter["music"] {
      return this.currentMusic;
  }

    getCurrentMusicOBS(): Observable<Parameter['music']> {
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

    getMusicUrlOBS() : Observable<Parameter['nameMusicPicture']> {
        return this.currentMusicPicturePath$.asObservable();
    }

    getMusicUrl() : Parameter['nameMusicPicture'] {
      return this.currentMusicPicturePath;
  }

    setMusicUrl() {
      this.currentMusicPicturePath$.next(this.getMusicString(this.currentMusic$.value))
    }

    getMusicString(isEnable : boolean) : Parameter['nameMusicPicture'] {
      if(isEnable == false){
        return "Son_Disabled.png";
      } else {
        return "Son_Enable.png";
      }
    }

    updateTextSize(size : number){
      this.currentSize = size;
      this.currentSize$.next(this.currentSize)
    }  
  }