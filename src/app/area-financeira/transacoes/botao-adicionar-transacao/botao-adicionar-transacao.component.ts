import { Component, ElementRef, viewChild } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css',
})
export class BotaoAdicionarTransacaoComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  abrirModal() {
    this.modal().nativeElement.showModal();
  }
}
