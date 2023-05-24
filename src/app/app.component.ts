import { UpdateWalletService } from './services/updateWallet.service';
import { Component } from '@angular/core';
import { Transfer } from './new-transfer/class/transfer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'WalletOfAny';

  wallet: number = this.service.actualWallet;

  constructor(private service: UpdateWalletService) {}

  updateWallet($event: Transfer) {
    this.wallet += $event.value;

    this.service.addNewTransfer($event);
  }
}
