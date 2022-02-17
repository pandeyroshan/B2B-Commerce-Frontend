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
import { UpdateBusinessComponent } from './home/update-business/update-business.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';
import { AllOrdersComponent } from './admin-dashboard/all-orders/all-orders.component';
import { EditOrderComponent } from './admin-dashboard/edit-order/edit-order.component';
import { AllProductsComponent } from './admin-dashboard/all-products/all-products.component';

const routes: Routes = [
  { path:"", component: HomepageComponent },
  { path:"my-business", component: MyBusinessComponent },
  { path:"cart", component: CartComponent },
  { path:"my-orders", component: MyOrdersComponent },
  { path:"add-address", component: AddAddressComponent },
  { path:"checkout", component: CheckoutComponent },
  { path:"order-confirmed", component: OrderConfirmedComponent },
  { path:"view-order", component: OrderDetailsComponent },
  { path:"update-business", component: UpdateBusinessComponent },
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent },
  { path:"logout", component: LogoutComponent },
  { path:"admin", component: DashboardComponent },
  { path:"admin/all-orders", component: AllOrdersComponent },
  { path:"admin/edit-order", component: EditOrderComponent },
  { path:"admin/all-products", component: AllProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
