import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-entrenador-modal',
  templateUrl: './entrenador-modal.component.html',
  styleUrls: ['./entrenador-modal.component.scss']
})
export class EntrenadorModalComponent {

  @Input() name

    constructor(public activeModal: NgbActiveModal    ) {}
}
