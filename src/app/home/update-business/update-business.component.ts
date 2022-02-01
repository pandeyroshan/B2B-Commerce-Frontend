import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BusinessService } from '../service/business.service';

@Component({
  selector: 'app-update-business',
  templateUrl: './update-business.component.html',
  styleUrls: ['./update-business.component.scss']
})
export class UpdateBusinessComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _businessService: BusinessService,
    private router: Router
  ) { }

  businessInformation = this.formBuilder.group({
    businessName: ['']
  })

  ngOnInit(): void {
  }

  saveBusinessInformation(){
    this._businessService.updateBusinessInformation(this.businessInformation.value["businessName"]);
    this.businessInformation.reset();
    this._snackBar.open("Business Updated Successfully", "OK");
    this.router.navigate(["/my-business"]);
  }

}
