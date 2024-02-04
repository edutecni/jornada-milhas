import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalBuscaComponent } from '../modal-busca/modal-busca.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalBuscaComponent, {
      width: '50%'
    })
  }

}
