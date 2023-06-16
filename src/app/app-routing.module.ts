import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';

const routes: Routes = [
  { path: 'extrato', component: ExtratoComponent },
  {
    path: 'new-transfer',
    component: NewTransferComponent,
  },
  { path: '', redirectTo: './new-transfer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
