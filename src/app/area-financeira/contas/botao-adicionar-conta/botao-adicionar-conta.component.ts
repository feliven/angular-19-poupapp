import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { Conta } from '../../compartilhados/conta.model';

@Component({
  selector: 'app-botao-adicionar-conta',
  imports: [FormsModule, BotaoComponent, ModalComponent],
  templateUrl: './botao-adicionar-conta.component.html',
  styleUrl: './botao-adicionar-conta.component.css',
})
export class BotaoAdicionarContaComponent {
  modalAberto = signal(false);

  novaContaDoFormulario = {
    nome: '',
    saldoInicial: '',
  };

  contaCriada = output<Conta>();

  abrirModal() {
    // this.modal().nativeElement.showModal();
    this.modalAberto.set(true);
  }

  onSubmit() {
    console.log(this.novaContaDoFormulario);
    const contaASerAdicionada = new Conta(
      this.novaContaDoFormulario.nome,
      Number(this.novaContaDoFormulario.saldoInicial)
    );

    this.contaCriada.emit(contaASerAdicionada);
    this.modalAberto.set(false);
  }
}
