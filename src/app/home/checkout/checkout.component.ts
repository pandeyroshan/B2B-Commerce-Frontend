import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';

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

  deliveryAddress: any;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  selectAddressForDelivery(id: number) {
    this.selectedAddressId = id;
    this.deliveryAddress = this.allAddress.find(x=> x.id == this.selectedAddressId)
    this._snackBar.open("Your package will be delivered", "OK");
  }

  confirmOrder() {
    
  }
  
  deleteAddress(id: number) {
    this.allAddress = this.allAddress.filter(address => address.id != id);
  }

}
