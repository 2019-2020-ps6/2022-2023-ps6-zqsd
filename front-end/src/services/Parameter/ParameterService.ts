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
    private currentMusicPicture : string = "Son_Disabled.png"; //this.getMusicString(this.currentMusic);

    public currentSize$: BehaviorSubject<Parameter['size']> = new BehaviorSubject(this.currentSize)
    public currentMusic$: BehaviorSubject<Parameter['music']> = new BehaviorSubject(this.currentMusic)
    public currentMusicPicturePath$ : BehaviorSubject<string> = new BehaviorSubject(this.currentMusicPicture)
  

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

    getCurrentSize(): number{
      return this.currentSize;
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
      this.currentMusicPicturePath$.next(this.getMusicString(this.currentMusic$.value))
    }

    getMusicString(isEnable : boolean) : string {
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