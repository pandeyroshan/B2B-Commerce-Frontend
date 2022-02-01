import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderId: number;
  orderDetails: any;
  purchaseDetails: any[];
  deliveryAddress: any;

  constructor(
    private route: ActivatedRoute,
    private _orderService: OrderService
    ) {
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
    })
  }

  ngOnInit(): void {
  }

}
