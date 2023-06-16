import { UpdateWalletService } from './../services/updateWallet.service';
import { Component } from '@angular/core';
import { Transfer } from '../new-transfer/class/transfer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})
export class ExtratoComponent {
  transferList: Array<Transfer> = [];
  constructor(private service: UpdateWalletService, private router: Router) {}

  private goToNewTransfer() {
    this.router.navigateByUrl('new-transfer');
  }
  ngOnInit() {
    this.transferList = this.service.listingTransfer;
  }
}
