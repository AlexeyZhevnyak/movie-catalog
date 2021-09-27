import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {

  @Input() title: string = "";
  @Input() message: string = "";

  @Output() decisionEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }


  sendDecision(decision: boolean) {
    this.decisionEmitter.emit(decision);
  }
}
