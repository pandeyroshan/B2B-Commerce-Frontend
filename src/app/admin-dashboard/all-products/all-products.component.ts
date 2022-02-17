import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  allProducts: any[];

  constructor(
    private _productService: ProductService,
  ) { }

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe(
      data => this.allProducts = data
    )
  }

  toggleProductActiveStatus(productId: number, newStatus: boolean) {
    let productIndex = this.allProducts.findIndex((product => product.id == productId));
    this.allProducts[productIndex].active = newStatus;
    console.log(productIndex);
    this._productService.toggleProductActiveStatus(productId, newStatus).subscribe(
      data => console.log(data)
    );
  }

}
