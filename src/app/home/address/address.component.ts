import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() address: any;

  constructor(
    private _snackBar: MatSnackBar,
    private _addressService: AddressService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteAddress(id: number) {
    let isDeleted = this._addressService.deleteAddress(id);
    
    this._snackBar.open("Address deleted successfully", "OK");
    this.router.navigate(["my-business"]);
  }

}
