import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user.model";
import {Users} from "../mocks/user.mock";
import { HttpClient } from "@angular/common/http";
import { serverUrl } from "src/configs/server.config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private allUSerDict: Record<string, User> = {
    "Pieropaul": Users[0],
    "frallo": Users[1],
    "Albertor": Users[2],
    "loupaul": Users[3]
  };
  public allUser: User[] = []
  public allUser$: Observable<User[]> = new Observable()
  public allUserDict$:BehaviorSubject<Record<string, User>> = new BehaviorSubject(this.allUSerDict)
  private currentUser: User = Users[0];
  public currentUser$: BehaviorSubject<User> = new BehaviorSubject(this.currentUser);

  constructor(private _httpClient: HttpClient) {
      this.allUser$ = _httpClient.get<User[]>(serverUrl+"/users")
      this.allUser$.subscribe(x => {
        this.allUser=x
        this.allUser.forEach(u => {
          this.allUSerDict[u.identifiant] = u;
          this.allUserDict$.next(this.allUSerDict)
        })
      })
  }

  getAllUserDict() {
    return this.allUserDict$.getValue();
  }

  changeUser(user: User) {
    this.currentUser=user
    this.currentUser$.next(user);
  }

  getCurrentUser(){
    return this.currentUser$
  }

  addUser(user: User) {
    this._httpClient.post<User>(serverUrl+"/users",user).subscribe(x =>{
        this.allUSerDict[x.identifiant]=x
    })
  }




}
