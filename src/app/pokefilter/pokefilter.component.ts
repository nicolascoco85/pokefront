import { Component, OnInit } from '@angular/core';
import { PokemonesService }  from '../pokemones.service';

@Component({
  selector: 'app-pokefilter',
  templateUrl: './pokefilter.component.html',
  styleUrls: ['./pokefilter.component.scss']
})
export class PokefilterComponent implements OnInit {

  public numero: number

  constructor(
    private pokemonService: PokemonesService
  ) { }

  ngOnInit() {
  }

  buscar(){
    this.pokemonService.getPokemones(this.numero)
  }

}
