import { Component, OnInit } from '@angular/core';
import { AddressService } from '../service/address.service';
import { BusinessService } from '../service/business.service';

@Component({
  selector: 'app-my-business',
  templateUrl: './my-business.component.html',
  styleUrls: ['./my-business.component.scss']
})
export class MyBusinessComponent implements OnInit {

  business_name: string = "Azure Inc."
  business_registration_number: string = "IN2021AI201"
  business_status: boolean = true
  business_email = "azure@inc.com"
  customer_id = "7201"

  allAddress: any[];
  business: any;

  constructor(
    private _addressService: AddressService,
    private _businessService: BusinessService
  ) { }

  ngOnInit(): void {
    this._addressService.getAllAddresses().subscribe(
      data => this.allAddress = data
    );
    
    this._businessService.getMyBusiness().subscribe(
      data => this.business = data
    );

  }

  deleteAddress(id: number) {
    this.allAddress = this.allAddress.filter(address => address.id != id);
  }

}
