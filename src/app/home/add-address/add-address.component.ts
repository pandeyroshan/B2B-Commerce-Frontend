import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AddressService } from '../service/address.service';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
 
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  nextUrl: string;

  constructor(
    private formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _addressService: AddressService,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.route.queryParams.subscribe((params: any) => {
      this.nextUrl = params["next-page"];
    });
  }

  addressForm = this.formBuilder.group({
    contactPerson: [''],
    contactPersonPhoneNumber: [''],
    addressLine1: [''],
    addressLine2: [''],
    addressLine3: [''],
    city: [''],
    country: [''],
    pincode: ['']
  })

  ngOnInit(): void {
  }

  addANewAddress() {
    this._addressService.addANewAddress(this.addressForm.value);
    this.addressForm.reset();
    this._snackBar.open("Address saved successfully", "OK");
    this.router.navigate(["/"+this.nextUrl]);
  }

}
