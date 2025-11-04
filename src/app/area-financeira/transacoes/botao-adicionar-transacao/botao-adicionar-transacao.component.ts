import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KeyValuePipe } from '@angular/common';

import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { TipoTransacao } from '../../../compartilhados/TipoTransacao';
import { Transacao } from '../../compartilhados/transacao.model';
// import { BancoConta } from '../../../compartilhados/BancoConta';
import { Conta } from '../../compartilhados/conta.model';

@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule, KeyValuePipe],
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

  tiposTransacao = TipoTransacao;
  // bancoConta = BancoConta;

  transacaoCriada = output<Transacao>();
  contas = input.required<Conta[]>();

  abrirModal() {
    // this.modal().nativeElement.showModal();
    this.modalAberto.set(true);
  }

  onSubmit() {
    console.log(this.novaTransacaoDoFormulario);
    const novaTransacao = new Transacao(
      this.novaTransacaoDoFormulario.nome,
      this.novaTransacaoDoFormulario.tipo as TipoTransacao,
      Number(this.novaTransacaoDoFormulario.valor),
      this.novaTransacaoDoFormulario.data,
      this.novaTransacaoDoFormulario.conta
    );
    console.log(novaTransacao);

    this.transacaoCriada.emit(novaTransacao);
    this.modalAberto.set(false);
  }
}
