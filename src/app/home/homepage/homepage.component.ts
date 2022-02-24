import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';

import { ProductService } from '../service/product.service';
import { BusinessService } from '../service/business.service';

import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  totalItemsInCart: number;

  realProducts: any[];

  constructor(
    private _productService: ProductService,
  ) { }

  ngOnInit(): void {
    this._productService.getAllProduct(Number(localStorage.getItem("userId"))).subscribe(data => {
      this.realProducts = data;
      console.log(data);
      }
    );
  }
}
