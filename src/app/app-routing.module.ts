import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component'
import { MyBusinessComponent } from './home/my-business/my-business.component';
import { CartComponent } from './home/cart/cart.component';
import { MyOrdersComponent } from './home/my-orders/my-orders.component';
import { AddAddressComponent } from './home/add-address/add-address.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { OrderConfirmedComponent } from './home/order-confirmed/order-confirmed.component';
import { OrderDetailsComponent } from './home/order-details/order-details.component';

const routes: Routes = [
  { path:"", component: HomepageComponent },
  { path:"my-business", component: MyBusinessComponent },
  { path:"cart", component: CartComponent },
  { path:"my-orders", component: MyOrdersComponent },
  { path:"add-address", component: AddAddressComponent },
  { path:"checkout", component: CheckoutComponent },
  { path:"order-confirmed", component: OrderConfirmedComponent },
  { path:"view-order", component: OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
