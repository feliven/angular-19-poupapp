import { afterRender, Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]',
})
export class DestaqueValorNumericoDirective {
  //   valor = input.required<number>();
  appDestaqueValorNumerico = input.required<number>();

  corValorPositivo = input('var(--destaque-receita)');
  corValorNegativo = input('var(--destaque-despesa)');

  constructor(elemento: ElementRef<HTMLElement>) {
    afterRender(() => {
      if (this.appDestaqueValorNumerico() > 0) {
        elemento.nativeElement.style.color = this.corValorPositivo();
      } else if (this.appDestaqueValorNumerico() < 0) {
        elemento.nativeElement.style.color = this.corValorNegativo();
      }
      console.log(elemento);
      // console.log('Diretiva aplicada');
    });
  }
}
