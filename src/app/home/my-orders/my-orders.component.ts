import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  myOrders = [
    {id: 1, timestamp: "25-01-2022", status: "PLACED"},
    {id: 2, timestamp: "24-01-2022", status: "IN_TRANSIT"},
    {id: 3, timestamp: "23-01-2022", status: "DELIVERED"}
  ]
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  cancelOrder(id: number, status: string) {
    
    let orderIndex: number = this.myOrders.findIndex((order => order.id == id));
    this.myOrders[orderIndex].status = "CANCELLED";
    
    if(status === "PLACED") {
      this._snackBar.open("Order - "+id+" has been cancelled", "OK");
    }
    if(status === "IN_TRANSIT") {
      this._snackBar.open("Order - "+id+" has been cancelled, and returning back.", "OK");
    }
  }

}
