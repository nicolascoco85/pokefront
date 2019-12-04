import { Component, OnInit, Input } from '@angular/core';
import { PokemonesService } from '../pokemones.service';
import { Pokemon } from '../data-class';

@Component({
  selector: 'app-poketable',
  templateUrl: './poketable.component.html',
  styleUrls: ['./poketable.component.scss']
})
export class PoketableComponent implements OnInit {

  @Input() pokemonestabla: Array<Pokemon>// es para que el padre cargue los pokemones


  constructor(
    private pokeService: PokemonesService
  ) { }

  ngOnInit() {
  }

}
