import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  orderId: number;

  order_details = {
    "id" : 1,
    "status" : "PLACED",
    "timestamp" : "27-01-2022",
    "total_cost" : 60,
    "purchase_details" : [
      {
        "product" : {
          "id" : 1,
          "name" : "Blue Pen",
          "price" : 10
        },
        "quantity" : 1,
        "cost" : 10
      },
      {
        "product" : {
          "id" : 2,
          "name" : "Black Pen",
          "price" : 10
        },
        "quantity" : 2,
        "cost" : 20
      },
      {
        "product" : {
          "id" : 3,
          "name" : "Red Pen",
          "price" : 10
        },
        "quantity" : 2,
        "cost" : 20
      },
      {
        "product" : {
          "id" : 4,
          "name" : "Gel Pen",
          "price" : 10
        },
        "quantity" : 1,
        "cost" : 10
      },
    ]
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params.id);
      this.orderId = params["order-id"];
      console.log("Hello");
      console.log(params);
    })
  }

  ngOnInit(): void {
  }

}
