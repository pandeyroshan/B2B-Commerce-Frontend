import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderService } from "../../home/service/order.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {

  }

}
