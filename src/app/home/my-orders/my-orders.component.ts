import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import {OrderService} from '../service/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  myOrders: any[];

  constructor(
    private _snackBar: MatSnackBar,
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    this._orderService.getMyOrders().subscribe(
      data => {
        this.myOrders = data
      }
    );
  }

  cancelOrder(id: number, status: string) {
    
    let orderIndex: number = this.myOrders.findIndex((order => order.id == id));
    this.myOrders[orderIndex].orderStatus = "CANCELLED";

    this._orderService.cancelOrder(id);
    
    if(status === "PLACED") {
      this._snackBar.open("Order - "+id+" has been cancelled", "OK");
    }
    if(status === "IN_TRANSIT") {
      this._snackBar.open("Order - "+id+" has been cancelled, and returning back.", "OK");
    }
  }

}
