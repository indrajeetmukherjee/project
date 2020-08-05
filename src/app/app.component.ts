import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Deal } from './deal';
import { Facility } from './facility';
import { Lender } from './lender';
import { DataServiceService } from './data-service.service';
import { Outstanding } from './outstanding';
import { AmtSummary } from './amt-summary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'TDF';
  topics = ['Angular','React'];
  
  
  public outstanding:Outstanding;
  public amtSummary:AmtSummary;
  public dealModel: Deal;
  public totalCommitAmount = -1
  constructor(private _dataService: DataServiceService){


    
    //this.facilities.push(this.facilityModel);
    this.amtSummary = {fundable:'', curr:'', totalchgAmt:-1}
    this.outstanding = {ostName:'',ostType:'',ostAmount:-1,ostCur:'',ostFund:'Y',
    lender:[{lenderName:'BMO',commitAmt:1555,proRata:12,newCommitAmt:123,newProRata:13,delta:-1},{lenderName:'SCOTIA',commitAmt:1555,proRata:12,newCommitAmt:123,newProRata:13,delta:-1}]};
    this.dealModel = _dataService.getDeal()
  }
  ngOnInit (){
    var flag = false
    var sum = 0
    for(var lcounter:number = 0; lcounter<this.dealModel.lender.length; lcounter++){
      for(var fcounter:number = 0; fcounter<this.dealModel.facility.length; fcounter++){
        for(var ocounter:number = 0; ocounter<this.dealModel.facility[fcounter].outstanding.length; ocounter++){
          this.dealModel.facility[fcounter].outstanding[ocounter].lender[lcounter].newCommitAmt = this.dealModel.facility[fcounter].outstanding[ocounter].ostAmount*(this.dealModel.facility[fcounter].lender[lcounter].proRata)/100
          this.dealModel.facility[fcounter].outstanding[ocounter].lender[lcounter].delta = this.dealModel.facility[fcounter].outstanding[ocounter].lender[lcounter].newCommitAmt-this.dealModel.facility[fcounter].outstanding[ocounter].lender[lcounter].commitAmt
    
          sum = this.dealModel.facility[fcounter].outstanding[ocounter].lender[lcounter].delta
          var ostCurr = this.dealModel.facility[fcounter].outstanding[ocounter].ostCur
          var ostFundable = this.dealModel.facility[fcounter].outstanding[ocounter].ostFund
          console.log(ostCurr)
          console.log(this.dealModel.lender[lcounter].amtSummary.length)
          for(var acounter:number = 0; acounter<this.dealModel.lender[lcounter].amtSummary.length; acounter++){
            var lenderCurr = this.dealModel.lender[lcounter].amtSummary[acounter].curr
            var lenderFundable = this.dealModel.lender[lcounter].amtSummary[acounter].fundable
            console.log('Amount Summary '+lenderCurr)
            if(ostCurr == lenderCurr && ostFundable == lenderFundable) {
              this.dealModel.lender[lcounter].amtSummary[acounter].totalchgAmt+=sum
              flag=true;
            }
          }
          if (!flag) {
          
            this.dealModel.lender[lcounter].amtSummary.push(new AmtSummary(ostFundable,ostCurr,sum))
            flag=false;
          }
        }
      }
      this.dealModel.lender[lcounter].totalchgAmt = sum
      console.log(this.dealModel.lender[lcounter].lenderName)
      console.log(this.dealModel.lender[lcounter].amtSummary)
      //this.amtSummary.curr=
     //this.dealModel.lender[lcounter].amtSummary.push(this.outstanding)
      sum = 0
      flag=false;
    }
  }
  onSubmit() {
    console.log(this.dealModel);
  }
  calculate(indexLender,indexFacility) {
    console.log(indexLender)
    console.log(indexFacility)
    console.log(this.dealModel.facility[indexFacility].outstanding.length)
    for(var counter:number = 0; counter<this.dealModel.facility[indexFacility].outstanding.length; counter++){
      this.dealModel.facility[indexFacility].outstanding[counter].lender[indexLender].newCommitAmt = this.dealModel.facility[indexFacility].outstanding[counter].ostAmount*(this.dealModel.facility[indexFacility].lender[indexLender].proRata)/100
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
  onAction(facilityIndex) {
    console.log("Clicked Ass button")
    this.dealModel.facility[facilityIndex].outstanding.push(this.outstanding)
    console.log(this.dealModel.facility[facilityIndex].outstanding[0])
  }
}

