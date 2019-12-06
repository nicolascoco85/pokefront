import { Component, OnInit } from '@angular/core';
import { EntrenadoresService } from '../entrenadores.service';
import { EntrenadorModalComponent} from '../entrenador-modal/entrenador-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription}  from 'rxjs'

@Component({
  selector: 'app-entrenadores',
  templateUrl: './entrenadores.component.html',
  styleUrls: ['./entrenadores.component.scss']
})
export class EntrenadoresComponent implements OnInit {

  constructor(
    private entrenadorService : EntrenadoresService,
    private modalService : NgbModal
  ) { }

  ngOnInit() {
    this.entrenadorService.getEntrenadores()
  }

  nuevoEntrenador(){
    const modalRef= this.modalService.open(EntrenadorModalComponent)
    modalRef.componentInstance.name="nuevo entrenador"
    modalRef.result
    .then(
        entrenador => {
          const suscription: Subscription =      this.entrenadorService.createrEntrenador(entrenador).subscribe(
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
