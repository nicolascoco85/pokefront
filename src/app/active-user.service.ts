import { Injectable } from '@angular/core';
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {
  public jwt:string
  public user: string

  constructor() { }

  public isLogued(){
    return this.jwt && this.user
  }

  public setUser(token: string){
    this.jwt = token
    this.user = decode(token).username
    console.log(decode(token))
  }
}
