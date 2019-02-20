import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userUrl = 'http://localhost:8080/user';

  constructor(private http:HttpClient) { }

  public getUsers() {
    return this.http.get<User[]>(this.userUrl+ "/all");
  }

  public getUser(user) {
    return this.http.get<User>(this.userUrl + "/" + user.user_id);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/del/"+ user.user_id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl + "/add", user);
  }

  public putUser(user){
    return this.http.put<User>(this.userUrl + "/add/" + user.user_id, user);
  }

  public addMonto(user,val){
    return this.http.put(this.userUrl + "/" + user.user_id,val);
  }
	
}
