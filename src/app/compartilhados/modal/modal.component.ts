import {
  afterRender,
  Component,
  ElementRef,
  input,
  model,
  viewChild,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');

  // @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  // @Input() aberto = false;

  aberto = model(false);

  constructor() {
    afterRender(() => {
      if (this.aberto()) {
        this.modal().nativeElement.showModal();
      } else {
        this.modal().nativeElement.close();
      }
    });
  }

  fecharModal() {
    this.aberto.set(false);
  }
}
