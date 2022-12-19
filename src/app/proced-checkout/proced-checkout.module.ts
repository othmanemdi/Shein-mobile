import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedCheckoutPageRoutingModule } from './proced-checkout-routing.module';

import { ProcedCheckoutPage } from './proced-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcedCheckoutPageRoutingModule
  ],
  declarations: [ProcedCheckoutPage]
})
export class ProcedCheckoutPageModule {}
