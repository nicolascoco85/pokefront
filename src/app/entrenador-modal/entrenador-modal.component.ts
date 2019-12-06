import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-entrenador-modal',
  templateUrl: './entrenador-modal.component.html',
  styleUrls: ['./entrenador-modal.component.scss']
})
export class EntrenadorModalComponent {

  @Input() name;

  @Input() nombre: string
  @Input() pokemon: number

    constructor(public activeModal: NgbActiveModal    ) {}

    public guardar(){
      this.activeModal.close({"nombre":this.nombre,"pokemon":this.pokemon})
    }
}
