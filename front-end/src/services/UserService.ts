import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.model";
import {Users} from "../mocks/user.mock";

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
  public allUserDict$: BehaviorSubject<Record<string, User>> = new BehaviorSubject(this.allUSerDict);

  private actualUser: User = Users[0];
  public actualUser$: BehaviorSubject<User> = new BehaviorSubject(this.actualUser);

  constructor() {

  }

  getAllUserDict() {
    return this.allUserDict$.getValue();
  }

  changeUser(user: User) {
    this.actualUser = user;
    this.actualUser$.next(this.actualUser);
  }




}
