import {
  afterRender,
  Component,
  ElementRef,
  input,
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

  aberto = input(false);

  constructor() {
    afterRender(() => {
      if (this.aberto()) {
        this.modal().nativeElement.showModal();
      }
    });
  }
}
