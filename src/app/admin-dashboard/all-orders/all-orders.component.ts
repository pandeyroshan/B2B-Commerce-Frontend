import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../service/order-service.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {

  allOrders: any[];

  constructor(
    private _orderService: OrderServiceService
  ) { }

  ngOnInit(): void {
    this._orderService.getAllOrders().subscribe(
      data => this.allOrders = data
    )
  }

}
