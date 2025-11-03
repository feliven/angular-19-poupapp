import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css',
})
export class BotaoAdicionarTransacaoComponent {
  // modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  modalAberto = signal(false);

  novaTransacaoDoFormulario = {
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: '',
  };

  abrirModal() {
    // this.modal().nativeElement.showModal();
    this.modalAberto.set(true);
  }

  onSubmit() {
    console.log(this.novaTransacaoDoFormulario);
  }
}
