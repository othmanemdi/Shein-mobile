import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcedCheckoutPage } from './proced-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcedCheckoutPageRoutingModule {}
