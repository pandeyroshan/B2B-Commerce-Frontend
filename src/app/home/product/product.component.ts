import { Component, Input, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addToCart() {
    console.log(this.product.name);
    this._snackBar.open(this.product.name + " added to cart", "OK");
  }

}
