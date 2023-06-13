import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { HttpClient } from "@angular/common/http";
import { serverUrl } from "../../configs/server.config";
import { PARAMETER } from "../../mocks/Parameter/parameter.mock";

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  private currentSize: Parameter['size'] = 0;
  private musicEnabled = false;
  public selectedMusic: string = "";
  private currentMusicPicturePath: Parameter['nameMusicPicture'] = this.getMusicString(this.musicEnabled);


  public currentMusic$ = new BehaviorSubject<boolean>(this.musicEnabled);
  public selectedMusic$: BehaviorSubject<string> = new BehaviorSubject(this.selectedMusic);
  public currentSize$: BehaviorSubject<Parameter['size']> = new BehaviorSubject(this.currentSize);
  public currentMusicPicturePath$: BehaviorSubject<Parameter['nameMusicPicture']> = new BehaviorSubject(this.currentMusicPicturePath);
  public currentParameter$: BehaviorSubject<Parameter> = new BehaviorSubject<Parameter>(PARAMETER);

  constructor(private _httpClient: HttpClient) {
    this.fetchParameter().subscribe((parameter: Parameter) => {
      this.currentParameter$.next(parameter);
      this.currentSize = parameter.size;
      this.currentSize$.next(parameter.size);
      this.selectedMusic = parameter.selectedMusic;
      this.musicEnabled = parameter.music;
      this.currentMusic$.next(this.musicEnabled);
      this.currentMusicPicturePath = this.getMusicString(this.musicEnabled);
      this.currentMusicPicturePath$.next(this.currentMusicPicturePath);
    });
  }

  fetchParameter(): Observable<Parameter> {
    return this._httpClient.get<Parameter>(serverUrl + "/parameter").pipe(
      tap((parameter: Parameter) => {
        console.log('Paramètres récupérés :', parameter);
      })
    );
  }


  updateParameter(parameter: Parameter): Observable<Parameter> {
    return this._httpClient.put<Parameter>(`${serverUrl}/parameter`, parameter);
  }

  getCurrentSizeOBS(): Observable<Parameter['size']> {
    return this.currentSize$.asObservable();
  }

  getCurrentSize(): Parameter['size'] {
    return this.currentSize;
  }

  getCurrentMusic(): Parameter['music'] {
    return this.musicEnabled;
  }

  toggleMusic() {
    this.musicEnabled = !this.musicEnabled;
    this.currentMusic$.next(this.musicEnabled);
    this.currentMusicPicturePath = this.getMusicString(this.musicEnabled);
    this.currentMusicPicturePath$.next(this.currentMusicPicturePath);

    const parameter = this.currentParameter$.getValue();
    parameter.music = this.musicEnabled;
    this.updateParameter(parameter).subscribe();
  }

  setSelectedMusic(musicPath: string) {
    this.selectedMusic = musicPath;
    this.selectedMusic$.next(musicPath);

    const parameter = this.currentParameter$.getValue();
    parameter.selectedMusic = musicPath;
    this.updateParameter(parameter).subscribe();
  }

  getCurrentMusicOBS(): Observable<Parameter['music']> {
    return this.currentMusic$.asObservable();
  }

  setCurrentSize(size: Parameter['size']) {
    this.currentSize = size;
    this.currentSize$.next(this.currentSize);
  }

  setCurrentMusic(isEnabled: boolean) {
    this.musicEnabled = isEnabled;
    this.currentMusic$.next(isEnabled);
    this.currentMusicPicturePath = this.getMusicString(isEnabled);
    this.currentMusicPicturePath$.next(this.currentMusicPicturePath);
  }

  getMusicUrlOBS(): Observable<Parameter['nameMusicPicture']> {
    return this.currentMusicPicturePath$.asObservable();
  }

  getMusicString(isEnabled: boolean): Parameter['nameMusicPicture'] {
    if (isEnabled) {
      return "Son_Enable.png";
    } else {
      return "Son_Disabled.png";
    }
  }

  updateTextSize(size: number) {
    this.currentSize = size;
    this.currentSize$.next(this.currentSize);
  }
}
