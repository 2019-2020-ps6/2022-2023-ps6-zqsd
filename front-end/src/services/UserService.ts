import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user.model";
import {Users} from "../mocks/user.mock";
import { HttpClient } from "@angular/common/http";
import { serverUrl } from "src/configs/server.config";
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allUSerDict: Record<string, User> = {
    "Pieropaul": Users[0],
    "frallo": Users[1],
    "Albertor": Users[2],
    "loupaul": Users[3],
    "Default": Users[4],
    "JoelleB": Users[5],
    "Admin": Users[6],
  };
  public allUser: User[] = []
  public allUser$: Observable<User[]> = new Observable()
  public allUserDict$:BehaviorSubject<Record<string, User>> = new BehaviorSubject(this.allUSerDict)

  //user par défault = 4
  private currentUser: User = Users[4];
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

  changeUserWithString(userString: string) {
    const user : User = this.allUSerDict[userString]
    this.currentUser=user
    this.currentUser$.next(user);
  }

  getCurrentUser(){
    return this.currentUser$.getValue();
  }

  addUser(user: User) {
    this._httpClient.post<User>(serverUrl+"/users",user).subscribe(x =>{
        this.allUSerDict[x.identifiant]=x
    })
  }

  deleteUser(user: User) {
    var deleteInDatabase : boolean = false;
    this._httpClient.delete<User>(serverUrl+"/users/"+user.id).subscribe(x =>{
      deleteInDatabase = true;
      delete this.allUSerDict[user.identifiant]
      this.allUserDict$.next(this.allUSerDict)
    })
    if (!deleteInDatabase) {
      delete this.allUSerDict[user.identifiant]
      this.allUserDict$.next(this.allUSerDict)
    }
  }




}
