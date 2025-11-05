import { Component, computed, signal } from '@angular/core';

import { SaldoComponent } from './saldo/saldo.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { ContasComponent } from './contas/contas.component';
import { Conta } from './compartilhados/conta.model';
import { Transacao, TipoTransacao } from './compartilhados/transacao.model';

@Component({
  selector: 'app-area-financeira',
  imports: [SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './area-financeira.component.html',
  styleUrl: './area-financeira.component.css',
})
export class AreaFinanceiraComponent {
  saldo = -30;

  saldoInicial = computed(() => {
    return this.contasComSaldoInicial().reduce((acumulador, conta) => {
      return acumulador + conta.saldo;
    }, 0);
  });

  saldoCalculado = computed(() => {
    return this.contas().reduce((acumulador, conta) => {
      return acumulador + conta.saldo;
    }, 0);
  });

  transacoes = signal<Transacao[]>([
    {
      id: '5',
      nome: '',
      tipo: TipoTransacao.SAQUE,
      valor: 200,
      data: new Date('2025-02-20T00:00'),
      conta: 'Switch Bank',
    },
    {
      id: '4',
      nome: 'Almoço',
      tipo: TipoTransacao.SAQUE,
      valor: 40,
      data: new Date('2025-01-15T00:00'),
      conta: 'Bytebank',
    },
    {
      id: '3',
      nome: '',
      tipo: TipoTransacao.DEPOSITO,
      valor: 400,
      data: new Date('2025-01-10T00:00'),
      conta: 'Bytebank',
    },
    {
      id: '2',
      nome: 'Freela (2ª parte)',
      tipo: TipoTransacao.DEPOSITO,
      valor: 200,
      data: new Date('2024-10-01T00:00'),
      conta: 'Anybank',
    },
    {
      id: '1',
      nome: 'Freela (1ª parte)',
      tipo: TipoTransacao.DEPOSITO,
      valor: 100,
      data: new Date('2024-10-01T00:00'),
      conta: 'Anybank',
    },
  ]);

  contasComSaldoInicial = signal<Conta[]>([
    {
      nome: 'Anybank',
      saldo: 1000,
    },
    {
      nome: 'Bytebank',
      saldo: 200,
    },
    {
      nome: 'Switch Bank',
      saldo: 450,
    },
  ]);

  contas = computed(() => {
    return this.contasComSaldoInicial().map((conta) => {
      const saldoAtualizado = this.calcularSaldoAtualizado(conta);
      return { ...conta, saldo: saldoAtualizado };
    });
  });

  calcularSaldoAtualizado(conta: Conta) {
    const transacoesDaConta = this.transacoes().filter((transacao) => {
      return transacao.conta === conta.nome;
    });

    const saldoAtualizado = transacoesDaConta.reduce(
      (acumulador, transacao) => {
        switch (transacao.tipo) {
          case TipoTransacao.DEPOSITO:
            return acumulador + transacao.valor;

          case TipoTransacao.SAQUE:
            return acumulador - transacao.valor;
          default:
            transacao.tipo satisfies never;
            throw new Error('Tipo de transação não identificada.');
        }
      },
      conta.saldo
    );
    return saldoAtualizado;
  }

  processarTransacao(transacao: Transacao) {
    this.transacoes.update((transacoes) => [transacao, ...transacoes]);
  }

  processarNovaConta(conta: Conta) {
    this.contasComSaldoInicial.update((contas) => [conta, ...contas]);
  }
}
