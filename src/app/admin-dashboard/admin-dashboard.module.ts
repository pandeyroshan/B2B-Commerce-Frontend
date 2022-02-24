import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { AllBusinessComponent } from './all-business/all-business.component';
import { ProductComponent } from './product/product.component';
import { BusinessComponent } from './business/business.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { OrderComponent } from './order/order.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { HomeModule } from '../home/home.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [AllProductsComponent, AllBusinessComponent, ProductComponent, BusinessComponent, AddProductComponent, EditProductComponent, EditBusinessComponent, AllOrdersComponent, OrderComponent, DashboardComponent, HeaderComponent, EditOrderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
    HomeModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class AdminDashboardModule { }
