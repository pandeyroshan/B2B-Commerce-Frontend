import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/home/service/order.service';
import { OrderServiceService } from '../service/order-service.service';
import { ProductService } from '../service/product.service';
import { TileInfoService } from '../service/tile-info.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allOrders: any[];
  allProducts: any[];
  adminTileInformation: any;

  constructor(
    private _orderService: OrderServiceService,
    private _productService: ProductService,
    private _tileInfoService: TileInfoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._orderService.getAllOrders().subscribe(
      data => this.allOrders = data
    )

    this._productService.getAllProducts().subscribe(
      data => this.allProducts = data
    )

    this._tileInfoService.getTileInformation().subscribe(
      data => this.adminTileInformation = data
    )
  }

  openAllBusiness() {
    this.router.navigate(["admin/all-business"]);
  }

}
