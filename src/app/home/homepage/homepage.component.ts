import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';

import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  realProducts: product[];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAllProduct().subscribe(data => this.realProducts = data);
  }

}
