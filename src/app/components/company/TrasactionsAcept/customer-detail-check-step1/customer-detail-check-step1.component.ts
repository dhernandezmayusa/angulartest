import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail-check-step1',
  templateUrl: './customer-detail-check-step1.component.html',
  styleUrls: ['./customer-detail-check-step1.component.scss']
})
export class CustomerDetailCheckStep1Component implements OnInit {

  @Input() dataDetail:any


  customerDetail:any =[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.customerDetail =this.dataDetail;

    console.log( this.customerDetail);
    console.log(this.dataDetail);
  }

}
