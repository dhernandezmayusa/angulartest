import { Component, Input, OnInit } from '@angular/core';
import {customerMain} from "src/app/models/customerMain";

@Component({
  selector: 'app-customer-detail-step1',
  templateUrl: './customer-detail-step1.component.html',
  styleUrls: ['./customer-detail-step1.component.scss']
})
export class CustomerDetailStep1Component implements OnInit {

  @Input() data: any;

  expandContent = true;

  customerMains: customerMain[];
  content: string = "";
  PageActual: number = 1;
  OrderV: number = 1;
  CantPorPage: number = 10;
  Flag: boolean = false;
  currentPage = 1;
  pageSizes: any;
  total: any;
  Page = ["5", "10", "20", "30"];
  listDetail:any =[];

  constructor() { }

  ngOnInit(): void {
    this.pageSizes = this.Page;


  }

  
  ngOnChanges() {

     this.customerMains = [];

     for (var key in this.data) {

      if (key !="default" && key!="length")
      {
        this.customerMains.push(this.data[key]);

       }
      }

     this.total = this.customerMains.length;
  }

  handlePageSizeChange(event: any) {
    this.CantPorPage = event.target.value;
    this.PageActual = 1;
  }

  get(data1:any)
  {
this.listDetail=[];

    let result = this.customerMains.filter(x => x.id === data1.id);
    this.listDetail =result[0].CustomerDetail;

    console.log(JSON.stringify(result[0].CustomerDetail));
    console.log(this.listDetail);
    return this.listDetail;
  }

  
}
