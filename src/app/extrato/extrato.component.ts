import { UpdateWalletService } from './../services/updateWallet.service';
import { Component, OnInit } from '@angular/core';
import { Transfer } from '../new-transfer/class/transfer';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})
export class ExtratoComponent {
  transferList: Array<Transfer> = [];
  constructor(private service: UpdateWalletService) {}
  ngOnInit() {
    this.transferList = this.service.listingTransfer;
  }
}
