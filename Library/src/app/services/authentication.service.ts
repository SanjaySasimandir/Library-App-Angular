import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post<any>('http://localhost:5555/users/register', { "user": user });
  }
  login(user: any) {
    return this.http.post<any>('http://localhost:5555/users/login', { "user": user });
  }

  loggedin(){
    return !!localStorage.getItem('loggedin');
  }
}
