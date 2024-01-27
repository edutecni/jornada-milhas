import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-de-destino',
  templateUrl: './card-de-destino.component.html',
  styleUrls: ['./card-de-destino.component.scss']
})
export class CardDeDestinoComponent {
  @Input() fonteImagem: string = '';
  @Input() textoAlternativo: string = '';
}
