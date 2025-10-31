import { afterRender, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDestaqueValorNumerico]',
})
export class DestaqueValorNumericoDirective {
  constructor(elemento: ElementRef<HTMLElement>) {
    afterRender(() => {
      elemento.nativeElement.style.color = 'var(--destaque-receita)';
      console.log(elemento);
      // console.log('Diretiva aplicada');
    });
  }
}
