import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthResponse } from './data-class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  public login(usuario: string, password: string): Observable<AuthResponse>{
    console.log("[LOGIN]",usuario, password)
   return this.http.post<AuthResponse>("http://localhost:3800/auth/login",
     {
       "username":usuario,
       "password":password
     })
  }
}
