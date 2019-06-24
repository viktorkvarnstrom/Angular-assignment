import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _apiurl: string = "http://localhost:3001/api";

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  private getUserId = localStorage.getItem('USER_ID');

  public getUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this._apiurl}/users/${this.getUserId}`);
  }

  public login(userInfo: User) {
    return this.http.post(`${this._apiurl}/users/login`, userInfo);
  }

  public update(userInfo: User) {
    console.log(localStorage.getItem("USER_ID"))
    console.log(userInfo)

    let getUserId = localStorage.getItem("USER_ID")
    let token = localStorage.getItem('ACCESS_TOKEN')

    return this.http.put(`${this._apiurl}/users/${this.getUserId}`, userInfo, {
      headers: {
        'authorization': 'bearer ' + token
      }
    });
  }

  public register(userInfo: User) {
    return this.http.post(`${this._apiurl}/users/register`, userInfo);
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('USER_EMAIL');
    this.cookieService.deleteAll();
  }


 

}
