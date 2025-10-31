import { afterRender, Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]',
})
export class DestaqueValorNumericoDirective {
  //   valor = input.required<number>();
  appDestaqueValorNumerico = input.required<number>();

  constructor(elemento: ElementRef<HTMLElement>) {
    afterRender(() => {
      if (this.appDestaqueValorNumerico() > 0) {
        elemento.nativeElement.style.color = 'var(--destaque-receita)';
      } else if (this.appDestaqueValorNumerico() < 0) {
        elemento.nativeElement.style.color = 'var(--destaque-despesa)';
      }
      console.log(elemento);
      // console.log('Diretiva aplicada');
    });
  }
}
