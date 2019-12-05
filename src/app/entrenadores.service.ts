import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActiveUserService } from './active-user.service';
import { EntrenadoresResponse, Entrenador } from './data-class'

@Injectable({
  providedIn: 'root'
})
export class EntrenadoresService {
  private readonly BASE_URL = "http://localhost:3800/entrenadors"
  public entrenadores : Array<Entrenador>
  constructor(
    private http:HttpClient,
    private activeUser: ActiveUserService
  ) { }

  public getEntrenadores(): void{
    console.log("dame  entrenadores")
    let headers = new HttpHeaders()
    headers = headers.set("token", this.activeUser.jwt)
    let url = this.BASE_URL
    this.http.get<EntrenadoresResponse>(url,{headers}).subscribe(
      response=>{
        this.entrenadores= response.data.list
      }
    )
  }
}
