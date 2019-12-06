import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActiveUserService } from './active-user.service';
import { EntrenadoresResponse, Entrenador, EntrenadorResponse } from './data-class'

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
    let url = this.BASE_URL + "?limit=100"
    this.http.get<EntrenadoresResponse>(url,{headers}).subscribe(
      response=>{
        this.entrenadores= response.data.list
      }
    )
  }

  public createrEntrenador(entrenador:Entrenador):Observable<EntrenadorResponse>{
    let headers = new HttpHeaders()
    headers = headers.set("token", this.activeUser.jwt)
    return this.http.post<EntrenadorResponse>("http://localhost:3800/entrenadors",
      {
        "nombre":entrenador.nombre,
        "pokemon":entrenador.pokemon
      }, {headers})
  }

  public deleteEntrenador(id):Observable<EntrenadorResponse>{
    let headers = new HttpHeaders()
    headers = headers.set("token", this.activeUser.jwt)
    console.log(id + " desde el service ato!")
    return this.http.delete<EntrenadorResponse>(`http://localhost:3800/entrenadors/${id}`, {headers})
  }

  public editEntrenador(entrenador : Entrenador):Observable<EntrenadorResponse>{
    let headers = new HttpHeaders()
    headers = headers.set("token", this.activeUser.jwt)

    return this.http.put<EntrenadorResponse>(`http://localhost:3800/entrenadors/${entrenador.id}`, {headers})
  }
}
