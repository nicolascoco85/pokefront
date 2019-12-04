import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActiveUserService } from './active-user.service';
import { PokemonesResponse, Pokemon } from './data-class'


@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  private readonly BASE_URL = "http://localhost:3800/pokemons"
  public pokemones : Array<Pokemon>
  constructor(
    private http:HttpClient,
    private activeUser: ActiveUserService
  ) { }

  public getPokemones(numero?: number): void{
    console.log("dame un pokemon")
    let headers = new HttpHeaders()
    headers = headers.set("token", this.activeUser.jwt)
    let url = numero? this.BASE_URL + "?numero=" + numero.toString(): this.BASE_URL
    this.http.get<PokemonesResponse>(url,{headers}).subscribe(
      response=>{
        this.pokemones= response.data.list
      }
    )
  }
}
