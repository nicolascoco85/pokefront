import { Injectable } from '@angular/core';
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ActiveUserService {
  public jwt:string
  public user: string

  constructor() {
    console.log("Me resetie!!! :p")
    this.jwt=localStorage.getItem("token")
    if (this.jwt) this.user=decode(this.jwt).username
  }

  public isLogued(): boolean{
    console.log(this.jwt && this.user)
    return !!this.jwt && !!this.user
  }

  public setUser(token: string):void{
    this.jwt = token
    this.user = decode(token).username
    console.log(decode(token))
    localStorage.setItem("token", token)
  }

  public logout(){
    console.log("Saliendo de la app")
    this.jwt=undefined
    this.user=undefined
    localStorage.removeItem("token")
  }
}
