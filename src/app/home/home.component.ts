import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public successMessage :string;

  constructor() { 
    this.successMessage="exitoso"
  }

  ngOnInit() {
  }

}
