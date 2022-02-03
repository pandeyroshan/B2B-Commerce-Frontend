import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-address',
  templateUrl: './show-address.component.html',
  styleUrls: ['./show-address.component.scss']
})
export class ShowAddressComponent implements OnInit {
  
  @Input() address: any;

  constructor() { }

  ngOnInit(): void {
  }

}
