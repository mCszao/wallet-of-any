import { Component } from '@angular/core';
import { Transfer } from './new-transfer/class/transfer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WalletOfAny';

  wallet: number = 0;
  transferList: Array<Transfer> = [];
  updateWallet($event: Transfer) {
    this.wallet += $event.value;
    const date = new Date();
    const dateDay = date.getUTCDate();
    const hours = date.getHours();
    this.transferList.push({
      ...$event,
      launchDate: date,
      date: dateDay,
      hours: hours,
    });
  }
}
