import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderService } from "../../home/service/order.service";
import { OrderServiceService } from "../service/order-service.service";

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  orderId: number;
  orderDetails: any;
  purchaseDetails: any[];
  deliveryAddress: any;

  constructor(
    private route: ActivatedRoute,
    private _orderService: OrderService,
    private _snackBar: MatSnackBar,
    private _updateStatusService: OrderServiceService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.orderId = params["order-id"];

      this._orderService.getOrderDetailByOrderId(this.orderId).subscribe(
        data => {
          this.orderDetails = data
        }
      );

      this._orderService.getPurchaseDetails(this.orderId).subscribe(
        data => {
          this.purchaseDetails = data
        }
      );
    });
  }

  changeOrderStatus(newOrderStatus: string, viewName: string) {
    this.orderDetails.orderStatus = newOrderStatus;
    this._updateStatusService.updateOrderSummary(this.orderDetails.id, newOrderStatus);
    this._snackBar.open("Order status has be updated to "+viewName, "OK");
  }

}
