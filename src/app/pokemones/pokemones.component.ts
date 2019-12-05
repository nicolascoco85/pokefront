import { Component, OnInit } from '@angular/core';
import { PokemonesService } from '../pokemones.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss']
})
export class PokemonesComponent implements OnInit {

  constructor(private pokeService: PokemonesService) { }

  ngOnInit() {
      this.pokeService.getPokemones()
  }

}
