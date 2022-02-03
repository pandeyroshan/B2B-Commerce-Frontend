import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllBusinessComponent } from './all-business/all-business.component';
import { ProductComponent } from './product/product.component';
import { BusinessComponent } from './business/business.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [DashboardComponent, HeaderComponent, AllProductsComponent, AllBusinessComponent, ProductComponent, BusinessComponent, AddProductComponent, EditProductComponent, EditBusinessComponent, AllOrdersComponent, OrderComponent],
  imports: [
    CommonModule
  ]
})
export class AdminDashboardModule { }
