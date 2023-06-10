import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PARAMETER } from 'src/mocks/Parameter/parameter.mock';
import { Parameter } from 'src/models/Parameter/parameter.model';

@Injectable({
    providedIn: 'root'
  })
  export class ParameterService {

    private currentSize : Parameter['size'] = PARAMETER.size;
    private musicEnabled = true;
    public currentMusic$ = new BehaviorSubject<boolean>(this.musicEnabled);
    public selectedMusic : string = "";
    public selectedMusic$ : BehaviorSubject<string> = new BehaviorSubject(this.selectedMusic);
    private currentMusicPicturePath : Parameter['nameMusicPicture'] = this.getMusicString(this.musicEnabled);

    public currentSize$: BehaviorSubject<Parameter['size']> = new BehaviorSubject(this.currentSize)
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
      return this.musicEnabled;
  }
  public toggleMusic() {
    console.log("before toggle:", this.musicEnabled);
    this.musicEnabled = !this.musicEnabled;
    console.log("after toggle:", this.musicEnabled);
    this.currentMusic$.next(this.musicEnabled);
    this.currentMusicPicturePath = this.getMusicString(this.musicEnabled);
    this.currentMusicPicturePath$.next(this.currentMusicPicturePath);
  }

  public setSelectedMusic(musicPath : string){
    this.selectedMusic = musicPath;
    this.selectedMusic$.next(musicPath)
  }
  public getselectedMusic(){
    return this.selectedMusic$.asObservable();
  }



    getCurrentMusicOBS(): Observable<Parameter['music']> {
        return this.currentMusic$.asObservable();
    }

    setCurrentSize(size: Parameter['size']) {
        this.currentSize$.next(size);
        console.log("tretre");

    }
    public setCurrentMusic(isEnabled: boolean) {
      this.musicEnabled = isEnabled;
      this.currentMusic$.next(isEnabled);
      this.currentMusicPicturePath = this.getMusicString(isEnabled);
      this.currentMusicPicturePath$.next(this.currentMusicPicturePath);
    }


    getMusicUrlOBS() : Observable<Parameter['nameMusicPicture']> {
        return this.currentMusicPicturePath$.asObservable();
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
