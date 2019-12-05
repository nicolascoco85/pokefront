import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActiveUserService } from '../active-user.service';
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
              ) {
    this.successMessage="exitoso"

  }

  ngOnInit() {
    this.successMessage=this.activeUser.user + "estas logueado"

  }

  logout(){
    this.activeUser.logout()
    this.router.navigateByUrl("login")
  }
  goToPokemones(){
      this.router.navigateByUrl("pokemones")
  }

  goToEntrenadores(){
      this.router.navigateByUrl("entrenadores")
  }

}
