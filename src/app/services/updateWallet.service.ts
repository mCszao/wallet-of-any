import { Injectable } from '@angular/core';
import { Transfer } from '../new-transfer/class/transfer';

@Injectable({
  providedIn: 'root',
})
export class UpdateWalletService {
  private wallet: number = 0;
  private transferList: Array<Transfer>;
  constructor() {
    this.transferList = [];
  }
  get listingTransfer() {
    return this.transferList;
  }

  get actualWallet() {
    return this.wallet;
  }
  addNewTransfer(transfer: Transfer) {
    this.wallet += transfer.value;
    const date = new Date();
    const dateDay = this.formatDate(date);
    const hours = this.formatHour(date);
    this.transferList.push({
      ...transfer,
      launchDate: date,
      date: dateDay,
      hours: hours,
    });
    console.log(this.actualWallet);
  }
  formatDate(objDate: Date) {
    let date = new Date(objDate);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  formatHour(objDate: Date) {
    let date = new Date(objDate);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
}
