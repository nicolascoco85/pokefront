import { Component, OnInit, Input } from '@angular/core';
import { EntrenadoresService } from '../entrenadores.service';
import { Entrenador } from '../data-class';

@Component({
  selector: 'app-entrenadorestable',
  templateUrl: './entrenadorestable.component.html',
  styleUrls: ['./entrenadorestable.component.scss']
})
export class EntrenadorestableComponent implements OnInit {

  @Input() entrenadorestable: Array<Entrenador>// es para que el padre cargue los entrenadores

  constructor(
    private entrenadorService: EntrenadoresService
  ) { }

  ngOnInit() {
  }

}
