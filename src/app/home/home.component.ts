import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActiveUserService } from '../active-user.service';
import { PokemonesService } from '../pokemones.service';
import { Pokemon } from '../data-class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public successMessage :string


  constructor( private router: Router,
              private activeUser: ActiveUserService,
              private pokeService: PokemonesService) {
    this.successMessage="exitoso"

  }

  ngOnInit() {
    this.successMessage=this.activeUser.user + "estas logueado"
    this.pokeService.getPokemones()
  }

  logout(){
    this.activeUser.logout()
    this.router.navigateByUrl("login")
  }

}
