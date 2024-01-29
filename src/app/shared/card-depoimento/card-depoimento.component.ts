import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {
  @Input() imgDepoente: string = '';
  @Input() nomeDepoente: string = '';
  @Input() textoDepoente: string = '';
}
