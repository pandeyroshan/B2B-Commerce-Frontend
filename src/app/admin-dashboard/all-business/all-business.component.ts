import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/home/service/business.service';

@Component({
  selector: 'app-all-business',
  templateUrl: './all-business.component.html',
  styleUrls: ['./all-business.component.scss']
})
export class AllBusinessComponent implements OnInit {

  allBusiness: any[];

  constructor(
    private _businessService: BusinessService,
  ) { }

  ngOnInit(): void {
    this._businessService.getAllBusiness().subscribe(
      data => this.allBusiness = data
    )
  }

  changeStatus(id:number,status:string)
  {
    if(status==="PENDING" || status==="REJECTED")this._businessService.approveBusiness(id).subscribe();
    if(status==="APPROVED")this._businessService.rejectBusiness(id).subscribe();
    
  }
  

  toggleBusinessActiveStatus(businessId: number, newStatus: boolean) {
    let businessIndex = this.allBusiness.findIndex((business => business.id == businessId));
    this.allBusiness[businessIndex].active = newStatus;
    console.log(businessIndex);
    this._businessService.toggleBusinessActiveStatus(businessId, newStatus).subscribe(
      data => console.log(data)
    );
  }
  
}