import { Component, OnInit, Input } from '@angular/core';
import { EntrenadoresService } from '../entrenadores.service';
import { Entrenador } from '../data-class';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs';
import { EntrenadorModalComponent} from '../entrenador-modal/entrenador-modal.component';

@Component({
  selector: 'app-entrenadorestable',
  templateUrl: './entrenadorestable.component.html',
  styleUrls: ['./entrenadorestable.component.scss']
})
export class EntrenadorestableComponent implements OnInit {

  @Input() entrenadorestable: Array<Entrenador>// es para que el padre cargue los entrenadores

  constructor(
    private entrenadorService: EntrenadoresService,
    private modalService : NgbModal
  ) { }

  ngOnInit() {
  }

  public delete(id){
    console.log(id)
    this.entrenadorService.deleteEntrenador(id).subscribe( res =>this.entrenadorService.getEntrenadores())
  }

  public edit(entrenador){
    const modalRef= this.modalService.open(EntrenadorModalComponent)
    modalRef.componentInstance.name="Editar Entrenador"
    modalRef.componentInstance.nombre=entrenador.nombre;
    modalRef.componentInstance.pokemon=entrenador.pokemon;
    modalRef.result
    .then(
        entrenador => {
          const suscription: Subscription =      this.entrenadorService.editEntrenador(entrenador).subscribe(
              response => {
                suscription.unsubscribe();
                this.entrenadorService.getEntrenadores()
              }
            )
      }
    ).catch(_ => {})
    console.log("asdaef")
  }

}
