import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-business',
  templateUrl: './my-business.component.html',
  styleUrls: ['./my-business.component.scss']
})
export class MyBusinessComponent implements OnInit {

  business_name: string = "Azure Inc."
  business_registration_number: string = "IN2021AI201"
  business_status: boolean = true
  customer_id = "7201"

  allAddress = [
    {id: 1, addressLine1: "Village - Naubasta", addressLine2: "POST - JP Nagar", addressLine3: "Rewa", city: "Rewa", country: "India", pincode: "486450", contactPersonName:"Roshan Pandey", contactPersonPhoneNumber: "9752315423"},
    {id: 2, addressLine1: "Chitra Nagar", addressLine2: "Vijaynagar", addressLine3: "Indore", city: "Indore", country: "India", pincode: "486458", contactPersonName:"Monika Pandey", contactPersonPhoneNumber: "7898762560"},
    {id: 3, addressLine1: "Shyam Nagar", addressLine2: "Near Mandi", addressLine3: "Dharamshala", city: "Dharamshala", country: "India", pincode: "870931", contactPersonName:"Kishan Pandey", contactPersonPhoneNumber: "7903820334"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  deleteAddress(id: number) {
    this.allAddress = this.allAddress.filter(address => address.id != id);
  }

}
