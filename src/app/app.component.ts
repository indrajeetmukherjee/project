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
  public totalCommitAmount = -1
  constructor(private _dataService: DataServiceService){
    //this.facilities.push(this.facilityModel);
    this.dealModel = _dataService.getDeal()
  }
  ngOnInit (){
    
  }
  onSubmit() {
    console.log(this.dealModel);
  }
  calculate(indexLender,indexFacility) {
    console.log(indexLender)
    console.log(indexFacility)
    console.log(this.dealModel.facility[indexFacility].outstanding.length)
    for(var counter:number = 0; counter<this.dealModel.facility[indexFacility].outstanding.length; counter++){
      this.dealModel.facility[indexFacility].outstanding[counter].lender[indexLender].newCommitAmt = this.dealModel.facility[indexFacility].outstanding[counter].ostAmount*this.dealModel.facility[indexFacility].lender[indexLender].proRata
      this.dealModel.facility[indexFacility].outstanding[counter].lender[indexLender].delta = this.dealModel.facility[indexFacility].outstanding[counter].lender[indexLender].newCommitAmt-this.dealModel.facility[indexFacility].outstanding[counter].lender[indexLender].commitAmt
    }
    var sum = 0
    for(var lcounter:number = 0; lcounter<this.dealModel.lender.length; lcounter++){
      for(var fcounter:number = 0; fcounter<this.dealModel.facility.length; fcounter++){
        for(var ocounter:number = 0; ocounter<this.dealModel.facility[fcounter].outstanding.length; ocounter++){
          sum += this.dealModel.facility[fcounter].outstanding[ocounter].lender[lcounter].delta
        }
      }
      this.dealModel.lender[lcounter].totalchgAmt = sum
      sum = 0
    }
  }
}
