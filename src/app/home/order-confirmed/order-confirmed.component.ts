import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.scss']
})
export class OrderConfirmedComponent implements OnInit {

  orderId: number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
