import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalBuscaComponent } from '../modal-busca/modal-busca.component';


@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']  
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog) {}


  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }

  openDialobBusca(){    
    this.dialog.open(ModalBuscaComponent, {width: '300px'})
  }
}
