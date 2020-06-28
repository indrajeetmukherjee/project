import { Component, OnInit } from '@angular/core';
import { Deal } from './deal';
import { Facility } from './facility';
import { Lender } from './lender';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TDF';
  topics = ['Angular','React'];
  
  
  
  public dealModel: Deal;
  public totalCommitAmount = 12345
  constructor(private _dataService: DataServiceService){
    //this.facilities.push(this.facilityModel);
    this.dealModel = _dataService.getDeal()
  }
  ngOnInit (){
    
  }
  onSubmit() {
    console.log(this.dealModel);
  }
}
