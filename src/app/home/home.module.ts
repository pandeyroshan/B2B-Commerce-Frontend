import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MyBusinessComponent } from './my-business/my-business.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { OrderConfirmedComponent } from './order-confirmed/order-confirmed.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateBusinessComponent } from './update-business/update-business.component';
import { ShowAddressComponent } from './show-address/show-address.component';


@NgModule({
  declarations: [HomepageComponent, CartComponent, CheckoutComponent, ProductComponent, ProfileComponent, MyOrdersComponent, HeaderComponent, MyBusinessComponent, AddressComponent, AddAddressComponent, OrderConfirmedComponent, OrderDetailsComponent, UpdateBusinessComponent, ShowAddressComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
    HttpClientModule
  ],
  exports: [
    HomepageComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    ProfileComponent,
    MyOrdersComponent,
    MyBusinessComponent,
    AddressComponent,
    AddAddressComponent,
    OrderConfirmedComponent,
    OrderDetailsComponent,
    ShowAddressComponent,
  ]
})
export class HomeModule { }
