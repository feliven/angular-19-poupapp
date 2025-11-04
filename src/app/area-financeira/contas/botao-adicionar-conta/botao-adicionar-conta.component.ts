import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';

@Component({
  selector: 'app-botao-adicionar-conta',
  imports: [FormsModule, BotaoComponent, ModalComponent],
  templateUrl: './botao-adicionar-conta.component.html',
  styleUrl: './botao-adicionar-conta.component.css',
})
export class BotaoAdicionarContaComponent {
  modalAberto = signal(false);

  abrirModal() {
    // this.modal().nativeElement.showModal();
    this.modalAberto.set(true);
  }
}
