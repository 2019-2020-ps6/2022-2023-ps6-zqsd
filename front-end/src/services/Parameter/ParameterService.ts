import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Parameter } from 'src/models/Parameter/parameter.model';
import { HttpClient } from "@angular/common/http";
import { serverUrl } from "../../configs/server.config";
import {PARAMETER} from "../../mocks/Parameter/parameter.mock";

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
  private currentSize: Parameter['size'] = 3;
  private musicEnabled = true;
  public currentMusic$ = new BehaviorSubject<boolean>(this.musicEnabled);
  public selectedMusic: string = "";
  public selectedMusic$ : BehaviorSubject<string> = new BehaviorSubject(this.selectedMusic);
  private currentMusicPicturePath: Parameter['nameMusicPicture'] = this.getMusicString(this.musicEnabled);

  public currentSize$: BehaviorSubject<Parameter['size']> = new BehaviorSubject(this.currentSize);
  public currentMusicPicturePath$: BehaviorSubject<Parameter['nameMusicPicture']> = new BehaviorSubject(this.currentMusicPicturePath);
  public currentParameter$: BehaviorSubject<Parameter> = new BehaviorSubject(PARAMETER);


  constructor(private _httpClient: HttpClient) {
    this.createOrUpdateParameter(PARAMETER).subscribe((parameter: Parameter) => {
      console.log("Parameter par défault créé");
    });

    this.fetchParameter().subscribe((parameter: Parameter) => {
      this.currentParameter$.next(parameter);
      this.currentSize = parameter.size;
      this.selectedMusic = parameter.selectedMusic;
      this.musicEnabled = parameter.music;

      // Mettre à jour d'autres propriétés si nécessaire
    });
  }

  fetchParameter(): Observable<Parameter> {
    return this._httpClient.get<Parameter>(`${serverUrl}/parameter`);
  }

  createOrUpdateParameter(parameter: Parameter): Observable<Parameter> {
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
  }

  setSelectedMusic(musicPath: string) {
    this.selectedMusic = musicPath;
    this.selectedMusic$.next(musicPath);
  }

  getSelectedMusic(): Observable<string> {
    return this.selectedMusic$.asObservable();
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
    if (isEnabled == false) {
      return "Son_Disabled.png";
    } else {
      return "Son_Enable.png";
    }
  }

  updateTextSize(size: number) {
    this.currentSize = size;
    this.currentSize$.next(this.currentSize);
  }
}
