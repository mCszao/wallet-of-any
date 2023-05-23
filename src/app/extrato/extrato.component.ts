import { Component, Input } from '@angular/core';
import { Transfer } from '../new-transfer/class/transfer';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent {
  @Input()
  transferList: Array<Transfer> = []

}
