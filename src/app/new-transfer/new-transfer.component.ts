import { Component, Output, EventEmitter } from '@angular/core';
import { Transfer } from './class/transfer';

@Component({
  selector: 'new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<Transfer>();

  value: number = 0;
  description: string;
  type: string;
  ativo: string = 'ativo';
  passivo: string = 'passivo';
  newTransferRequest() {
    const newTransferDTO = new Transfer(
      this.value,
      this.description,
      this.type
    );
    this.onTransfer.emit(newTransferDTO);

    this.cleanInputs();
  }

  cleanInputs() {
    this.value = 0;
    this.description = '';
    this.type = '';
  }
}
