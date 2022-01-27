import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  addressForm = this.formBuilder.group({
    contactPersonName: [''],
    contactPersonContactNumber: [''],
    addressLine1: [''],
    addressLine2: [''],
    addressLine3: [''],
    city: [''],
    country: [''],
    pincode: ['']
  })

  ngOnInit(): void {
  }

  saveForm(){
    console.log(this.addressForm.value);
    this.addressForm.reset();
    this._snackBar.open("Address saved successfully", "OK");
  }

}
