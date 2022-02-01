import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddressService } from '../service/address.service';

import { CheckoutService } from "../service/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  selectedAddressId: number = -1;

  allAddress = [
    {id: 1, addressLine1: "Village - Naubasta", addressLine2: "POST - JP Nagar", addressLine3: "Rewa", city: "Rewa", country: "India", pincode: "486450", contactPersonName:"Roshan Pandey", contactPersonPhoneNumber: "9752315423"},
    {id: 2, addressLine1: "Chitra Nagar", addressLine2: "Vijaynagar", addressLine3: "Indore", city: "Indore", country: "India", pincode: "486458", contactPersonName:"Monika Pandey", contactPersonPhoneNumber: "7898762560"},
    {id: 3, addressLine1: "Shyam Nagar", addressLine2: "Near Mandi", addressLine3: "Dharamshala", city: "Dharamshala", country: "India", pincode: "870931", contactPersonName:"Kishan Pandey", contactPersonPhoneNumber: "7903820334"},
  ]

  allAvailableAddress: any[];

  deliveryAddress: any = null;

  constructor(
    private _snackBar: MatSnackBar,
    private _checkoutService: CheckoutService,
    private _addressService: AddressService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this._addressService.getAllAddresses().subscribe(
      data => {
        this.allAvailableAddress = data;
      }
    );
  }

  selectAddressForDelivery(id: number) {
    this.selectedAddressId = id;
    this.deliveryAddress = this.allAddress.find(x=> x.id == this.selectedAddressId)
    this._snackBar.open("Your package will be delivered", "OK");
  }

  placeOrder() {
    localStorage.setItem("cartId", "1");
    this._checkoutService.placeOrder(Number(localStorage.getItem("cartId")), this.deliveryAddress.id);
    this.router.navigate(["/order-confirmed"]);
  }

}